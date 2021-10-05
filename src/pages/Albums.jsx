import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleAlbum from "../components/SingleAlbum";
import { useState, useEffect } from "react";
import { albumArray } from "../data/data";
import Cookies from "universal-cookie";
import SingleTrack from "../components/SingleTrack";

const Albums = () => {
  const [tracks, setTracks] = useState("")
  const cookies = new Cookies()
  const token = cookies.get("token")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        const decoded = await response.json()
        console.log(decoded)
        setTracks(decoded.items)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTracks()
  }, [])
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <Container className="ml-0"><PageCover /></Container>
        <Container className="my-3 ml-3 mb-5">
        <Row>
        {tracks && tracks.map(result => {
                  counter += 1
                  return <SingleTrack hasDate={false} key={result.id + (Math.random() * 10000)} showTimes hasNumbers={false} number={counter} song={result.track.name} img={result.track.album.images[0].url} artist={result.track.artists[0].name}/>
                }
              )}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;