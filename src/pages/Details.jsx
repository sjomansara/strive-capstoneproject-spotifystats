import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import PageCover from "../components/PageCover";
import TrackDetails from "../components/TrackDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { artistArray } from "../data/data";

const Details = () => {
  const [album, setAlbum] = useState("")
  let params = useParams()
  console.log("params are", params)

  const fetchTracks = async () => {
    let fetchString
    switch (params.type) {
      case ("track"):
        fetchString = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + params.id
        break
      case ("album"):
        fetchString = "https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id
        break
      case ("artist"):
        fetchString = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + params.id
    }

    try {
      const response = await fetch(fetchString)

      if (response.ok) {
        const decoded = await response.json()
        setAlbum(decoded)
        console.log("decoded is: ", decoded)
      }
    } catch (error) {
      console.error(error)
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
        {album && <Container className="ml-3"><Row>
            <Col md={4} className="">
                <img src={album.cover_big} width="350px" height="350px" />
            </Col>
            <Col md={8} className="text-muted mt-3" id="trackDetails">
                <h4>{album.title}</h4>
                <h5>{album.artist.name}</h5>
                <h5>{album.duration}</h5>
                <br></br>
                <h5>Tracklist</h5>
            </Col>
        </Row></Container>}
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Details;