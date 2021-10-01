import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleAlbum from "../components/SingleAlbum";
import { useState, useEffect } from "react";
import { albumArray } from "../data/data";

const Albums = () => {
  const [albums, setAlbums] = useState("")

  const fetchAlbums = async () => {
    let albumData = []
    let albumArrayCopy = albumArray
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.ceil(Math.random() * albumArrayCopy.length - 1)
      console.log(randomIndex)
      console.log("album id is: ", albumArrayCopy[randomIndex])
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumArrayCopy[randomIndex])
  
        if (response.ok) {
          albumArrayCopy.splice(randomIndex, 1)
          const decoded = await response.json()
          albumData.push(decoded)
          console.log(decoded)
        }
      } catch (error) {
        console.log("happens here: ", error)
      }
    }
    setAlbums(albumData)
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  let counter = 0
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
        {albums && albums.map(album => {
          if (!album.error) {
            counter += 1
            console.log("album in loop is: ", album)
            return <SingleAlbum key={album.id} id={album.id} artist={album.artist.name} img={album.cover_medium} title={album.title} number={counter} />
          }
        })}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;