import { useEffect, useState } from "react";
import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap";
import SingleTrack from "../components/SingleTrack";
import Cookies from 'universal-cookie'

const RecentlyPlayed = () => {
  const [tracks, setTracks] = useState("")
  const cookies = new Cookies()
  const token = cookies.get("token")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
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
              <div>
                <Container className="ml-0"><PageCover /></Container>
                <Container id="tracks" className="ml-0">
                {tracks && tracks.map(result => {
                  counter += 1
                  return <SingleTrack key={result.track.id + (Math.random() * 10000)} showTimes hasNumbers={false} number={counter} song={result.track.name} img={result.track.album.images[0].url} artist={result.track.artists[0].name} time={result.played_at} />
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