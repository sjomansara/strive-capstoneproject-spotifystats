import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import PageCover from "../components/PageCover";
import TrackDetails from "../components/TrackDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { artistArray } from "../data/data";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import SingleTrack from "../components/SingleTrack";

const Details = () => {
  const [details, setDetails] = useState("") // where the data is
  let params = "artist" // useParams()
  console.log("params are", params)
  const cookies = new Cookies()
  const token = cookies.get("token")
  const [isFavorite, setIsFavorite] = useState(false)
  const [albumTracks, setAlbumTracks] = useState("")
  const [artistTracks, setArtistTracks] = useState("")

    const onFavorite = () => {
        setIsFavorite(!isFavorite)
    }

  const fetchDetails = async () => {
    let fetchString = "https://api.spotify.com/v1/search"
    switch (params) {
      case ("track"):
        fetchString += "?q=toxic&type=track" // + params.id
        break
      case ("album"):
        fetchString += "?q=abbey%20road&type=album" // + params.id
        break
      case ("artist"):
        fetchString += "?q=the%20beatles&type=artist" // + params.id
    }

    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const decoded = await response.json()
        if (params === "track") {
          setDetails(decoded.tracks.items[0])
          console.log("decoded is: ", decoded.tracks.items[0])
        } else if (params === "album") {
          setDetails(decoded.albums.items[0])
          console.log("decoded is: ", decoded.albums.items[0])
          fetchAlbumTracks(decoded.albums.items[0].id)
        } else if (params === "artist") {
          setDetails(decoded.artists.items[0])
          console.log(decoded.artists.items[0])
          fetchArtistTracks(decoded.artists.items[0].id)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchAlbumTracks = async (id) => {
    let fetchString = "https://api.spotify.com/v1/albums/" + id + "/tracks"


    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const decoded = await response.json()
        setAlbumTracks(decoded.items)
        console.log("albumTracks is: ", decoded.items)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchArtistTracks = async (id) => {
    let fetchString = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?market=se"


    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const decoded = await response.json()
        setArtistTracks(decoded.tracks)
        console.log("albumTracks is: ", decoded.tracks)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  if (params === "track") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {details && <Container className="ml-3"><Row>
              <Col md={4} className="">
                  <img src="https://lastfm.freetls.fastly.net/i/u/770x0/b44b0871748de6bf49d800f0e00f27d0.jpg#b44b0871748de6bf49d800f0e00f27d0" width="350px" height="350px" />
              </Col>
              <Col md={2} className="text-muted mt-3" id="trackDetails">
                  <h4>Magic</h4>
                  <h5>Kylie Minogue</h5>
                  <h5>4:10</h5>
              </Col>
              <Col md={3}>
                  <FontAwesomeIcon id="heartIcon" className="mt-3" icon={isFavorite ? faHeartSolid : faHeart} onClick={onFavorite} />
              </Col>
          </Row></Container>}
          </Col>
          </Row>
          <MyFooter />
      </div>
    );
  }
  
  if (params === "album") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {details && 
            <Container className="ml-3">
              <Row>
                <Col md={3} className="text-muted" id="trackDetails">
                    <img src={details.images[0].url} width="350px" height="350px" />
                    <h4 className="mt-3">{details.name}</h4>
                    <h5>{details.artists[0].name}</h5>
                    <h6>{details.total_tracks} tracks</h6>
                </Col>
                <Col md={8} className="mb-5 albumTracks">
                    {albumTracks && albumTracks.map(track => {
                      return <SingleTrack small showCover={false} artist={track.artists[0].name} song={track.name} />
                    })}
                </Col>
            </Row>
          </Container>}
          </Col>
          </Row>
          <MyFooter />
      </div>
    );
  }

  if (params === "artist") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {details && 
            <Container className="ml-3">
              <Row>
                <Col md={3} className="text-muted" id="trackDetails">
                    <img src={details.images[0].url} width="350px" height="350px" />
                    <h3 className="mt-3">{details.name}</h3>
                </Col>
                <Col md={8} className="mb-5 albumTracks">
                    <h4 className="text-muted ml-3 mt-3" id="trackDetails">Top Tracks:</h4>
                    {artistTracks && artistTracks.map(track => {
                      return <SingleTrack small showCover={false} song={track.name} />
                    })}
                </Col>
            </Row>
          </Container>}
          </Col>
          </Row>
          <MyFooter />
      </div>
    );
  }
}

export default Details;