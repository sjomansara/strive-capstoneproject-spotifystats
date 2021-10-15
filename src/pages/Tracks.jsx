import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap"
import PageCover from "../components/PageCover";
import SingleTrack from "../components/SingleTrack";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import { checkedIfSavedTracks } from "../helpers/ApiHelpers";

const Tracks = () => {
  const [tracks, setTracks] = useState("")
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [boolList, setBoolList] = useState(undefined)
  const cookies = new Cookies()
  const token = cookies.get("token")
  const params = useParams()

  let counter = 0
  let fetchString = "https://api.spotify.com/v1/me/top/tracks"

  switch (params.time) {
    case ("short_term"):
      fetchString += "?time_range=short_term"
      break
    case ("medium_term"):
      fetchString += "?time_range=medium_term"
      break
    case ("long_term"):
      fetchString += "?time_range=long_term"
      break
  }

  const fetchTracks = async () => {
    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        const decoded = await response.json()
        console.log(decoded)
        setTracks(decoded.items)
      } else {
        setIsError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  const checkFavorites = async (songs) => {
    let boolArray = []
    for (let i = 0; i < songs.length; i++) {
      boolArray.push(songs[i].id)
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

    // if (tracks !== "") {
    //   checkFavorites(tracks)
    // }
  }, [params])

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
              <Container className="ml-0"><PageCover /></Container>
              <Container id="tracks" className="ml-0">
              {
                    isLoading && tracks === "" &&
                    <Spinner animation="border" variant="dark" className="spinner mb-3"/>
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
              {boolList && tracks.map(result => {
                  console.log("result is: ", result)
                  console.log(boolList[counter - 1])
                  counter += 1
                  return <SingleTrack isFavorite={boolList[counter - 1]} id={result.id} artistId={result.artists[0].id} albumId={result.album.id} showCover hasDate={false} key={result.id + (Math.random() * 10000)} showTimes hasNumbers={true} number={counter} song={result.name} img={result.album.images[0].url} artist={result.artists[0].name}/>
                }
              )}
              </Container>
            </Col>
          </Row>
        <MyFooter />
    </div>
  );
}

export default Tracks;