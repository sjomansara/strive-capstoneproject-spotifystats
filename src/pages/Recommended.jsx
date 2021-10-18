import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Cookies from "universal-cookie"
import { useEffect } from "react";
import { getRecommendedArtists, getRecommendedTracks } from "../helpers/ApiHelpers";
import SingleTrack from "../components/SingleTrack";
import { useParams } from "react-router-dom";
import SingleArtist from "../components/SingleArtist";

const Recommended = () => {
  const [trackIds, setTrackIds] = useState([])
  const [recommendations, setRecommendations] = useState()

  const cookies = new Cookies()
  const token = cookies.get("token")

  const fetchTracks = async () => {
    let fetchString = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term"

    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        const decoded = await response.json()
        console.log(decoded.items)
        if (decoded.items) {
          let idArray = []
          for (let i = 0; i < 5; i++) {
            idArray.push(decoded.items[i].id)
          }
          setTrackIds(idArray)
          console.log("tracks is: ", trackIds)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(async () => {
    let idString = ""
    for (let j = 0; j < trackIds.length; j++) {
      // console.log("id is: ", trackIds[j])
      if (j !== 4) {
        idString += trackIds[j] + ","
      } else {
        idString += trackIds[j]
      }
    }
    // console.log("idString is: ", idString)
    let recommendations = await getRecommendedTracks(token, idString)
    setRecommendations(recommendations)
    console.log("recommendations is: ", recommendations)
  }, [trackIds])

  return (
    <div>
        <MyNavbar />
          <Row>
            <Col md={2}>
              <SideBar />
            </Col>
            <Col md={10}>
                <Container className="ml-0"><PageCover /></Container>
                {recommendations && <Container>{recommendations.map(song => {
                  console.log(song)
                  return <SingleTrack 
                    // isFavorite={boolList[counter - 1]}
                    id={song.id}
                    artistId={song.artists[0].id}
                    albumId={song.album.id}
                    showCover
                    hasDate={false}
                    key={song.id + (Math.random() * 10000)}
                    showTimes
                    song={song.name}
                    img={song.album.images[0].url}
                    artist={song.artists[0].name}
                  />
                })}</Container>}
            </Col>
          </Row>
        <MyFooter />
    </div>
  );
}

export default Recommended;