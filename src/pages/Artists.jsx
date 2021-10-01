import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleArtist from "../components/SingleArtist";
import { useState, useEffect } from "react";
import { artistArray } from "../data/data";

const Artists = () => {
  const [artists, setArtists] = useState("")

  const fetchArtists = async () => {
    let artistsData = []
    let artistArrayCopy = artistArray
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.ceil(Math.random() * artistArrayCopy.length - 1)
      console.log(randomIndex)
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistArrayCopy[randomIndex])
  
        if (response.ok) {
          artistArrayCopy.splice(randomIndex, 1)
          const decoded = await response.json()
          artistsData.push(decoded)
          console.log(decoded)
        }
      } catch (error) {
        console.log(error)
      }
    }
    setArtists(artistsData)
  }

  useEffect(() => {
    fetchArtists()
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
        <Container className="my-3 ml-3">
        <Row>
        {artists && artists.map(artist => {
          counter += 1
          return <SingleArtist id={artist.id} img={artist.picture_medium} artist={artist.name} number={counter} />
        })}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Artists;