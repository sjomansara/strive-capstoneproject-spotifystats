import { useEffect, useState } from "react";
import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap";
import SingleTrack from "../components/SingleTrack";

const RecentlyPlayed = () => {
  const [tracks, setTracks] = useState("")

  let counter = 0

  const fetchTracks = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=britneyspears")

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
              <div>
                <Container className="ml-0"><PageCover /></Container>
                <Container id="tracks" className="ml-0">
                {tracks && tracks.map(result => {
                  counter += 1
                  return <SingleTrack showTimes hasNumbers={false} number={counter} song={result.title} img={result.album.cover_small} artist={result.artist.name} />
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