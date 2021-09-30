import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleAlbum from "../components/SingleAlbum";
import { useState, useEffect } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState("")

  const fetchAlbums = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/1421245")

      if (response.ok) {
        const decoded = await response.json()
        setAlbums(decoded)
        console.log(decoded)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAlbums()
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
        {albums && <SingleAlbum title={albums.title} img={albums.cover_medium} artist={albums.artist.name} />}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;