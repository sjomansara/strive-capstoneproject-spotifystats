import { useEffect, useState } from "react";
import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import SingleTrack from "../components/SingleTrack";
import Cookies from 'universal-cookie'
import { checkedIfSavedTracks, getSavedTracks } from "../helpers/ApiHelpers";

const RecentlyPlayed = () => {
  const [tracks, setTracks] = useState("")
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [favoriteIds, setFavoriteIds] = useState([])
  const [boolList, setBoolList] = useState(undefined)
  const cookies = new Cookies()
  const token = cookies.get("token")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        const decoded = await response.json()
        console.log(decoded)
        setTracks(decoded.items)
        console.log("tracks is: " , decoded.items)
      } else {
        setIsError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  const setSavedIds = async () => {
    let savedSongs = await getSavedTracks(token)
    let realList = savedSongs.items
    // console.log("savedSongs is: ", savedSongs)
    let savedIds = []
    for (let i = 0; i < realList.length; i++) {
      savedIds.push(realList[i].track.id)
    }
    setFavoriteIds(savedIds)
    // console.log("savedids is: ", savedIds)
  }

  const checkFavorites = async (songs) => {
    let boolArray = []
    console.log("songs is: ", songs)
    for (let i = 0; i < songs.length; i++) {
      boolArray.push(songs[i].track.id)
    }

    let idString = ""
    for (let j = 0; j < boolArray.length; j++) {
      idString += boolArray[j] + ","
    }

    let resolved = await checkedIfSavedTracks(token, idString)
    console.log("resolved is: ", resolved)

    setBoolList(resolved)
  }

  useEffect(() => {
    fetchTracks()
    // setSavedIds()
    // if (tracks !== "") {
    //   checkFavorites(tracks)
    // }
  }, [])

  useEffect(() => {
    if (tracks !== "") {
      checkFavorites(tracks)
    }
  }, [tracks])

  return (
    <div>
        <MyNavbar />
          <Row>
            <Col md={2}>
              <SideBar />
            </Col>
            <Col md={10}>
              <div>
                <Container className="ml-0"><PageCover /></Container>
                <Container id="tracks" className="ml-0">
                {
                    isLoading && tracks === "" || !boolList &&
                    <Spinner animation="border" variant="dark" className="spinner mb-3"/>
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
                {tracks && boolList && tracks.map(result => {
                  counter += 1
                  return <SingleTrack isFavorite={boolList[counter - 1]} artistId={result.track.artists[0].id} id={result.track.id} showCover hasDate key={result.track.id + (Math.random() * 10000)} showTimes hasNumbers={false} number={counter} song={result.track.name} albumId={result.track.album.id} img={result.track.album.images[0].url} artist={result.track.artists[0].name} time={result.played_at} />
                }
              )}
                </Container>
              </div>
            </Col>
          </Row>
        <MyFooter />
    </div>
  );
}

export default RecentlyPlayed;