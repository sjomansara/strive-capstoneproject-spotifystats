import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import PageCover from "../components/PageCover";
import SingleTrack from "../components/SingleTrack";
import { useEffect, useState } from "react";

const Tracks = () => {
  const [tracks, setTracks] = useState("")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=fleetwoodmac")

      if (response.ok) {
        const decoded = await response.json()
        setTracks(decoded.data)
        console.log(decoded.data)
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
                  return <SingleTrack showTimes={false} hasNumbers number={counter} song={result.title} img={result.album.cover_small} artist={result.artist.name} />
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