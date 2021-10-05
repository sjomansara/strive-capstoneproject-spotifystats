import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import PageCover from "../components/PageCover";
import SingleTrack from "../components/SingleTrack";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const Tracks = () => {
  const [tracks, setTracks] = useState("")
  const cookies = new Cookies()
  const token = cookies.get("token")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
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
              <Container id="tracks" className="ml-0">
              {tracks && tracks.map(result => {
                  counter += 1
                  return <SingleTrack key={result.id + (Math.random() * 10000)} showTimes hasNumbers={true} number={counter} song={result.name} img={result.album.images[0].url} artist={result.artists[0].name}/>
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