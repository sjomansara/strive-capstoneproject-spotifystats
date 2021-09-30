import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleArtist from "../components/SingleArtist";
import { useState, useEffect } from "react";

const Artists = () => {
  const [artists, setArtists] = useState("")

  const fetchArtists = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/169")

      if (response.ok) {
        const decoded = await response.json()
        setArtists(decoded)
        console.log(decoded)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArtists()
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
        <Container className="my-3 ml-3">
        <Row>
        {artists && <SingleArtist img={artists.picture_medium} artist={artists.name} />}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Artists;