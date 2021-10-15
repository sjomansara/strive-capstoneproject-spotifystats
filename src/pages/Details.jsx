import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap"
import PageCover from "../components/PageCover";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import SingleTrack from "../components/SingleTrack";
import { Link } from "react-router-dom"
import { checkedIfSavedTracks, addSavedTrack, deleteSavedTrack } from "../helpers/ApiHelpers";

const Details = () => {
  const [details, setDetails] = useState("") // where the data is
  let params = useParams()
  console.log("params are", params)
  const cookies = new Cookies()
  const token = cookies.get("token")
  const [isFavorite, setIsFavorite] = useState(false)
  const [albumTracks, setAlbumTracks] = useState("")
  const [artistTracks, setArtistTracks] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const onFavorite = () => {
      setIsFavorite(!isFavorite)

      if (!isFavorite) {
        addSavedTrack(token, params.id)
    } else if (isFavorite) {
        deleteSavedTrack(token, params.id)
    }
  }

  const fetchDetails = async () => {
    setIsLoading(true)
    let fetchString
    switch (params.type) {
      case ("track"):
        fetchString = "https://api.spotify.com/v1/tracks/" + params.id // + params.id
        break
      case ("album"):
        fetchString = "https://api.spotify.com/v1/albums/" + params.id // + params.id
        break
      case ("artist"):
        fetchString = "https://api.spotify.com/v1/artists/" + params.id
    }

    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      if (response.ok) {
        const decoded = await response.json()
        if (params.type === "track") {
          setDetails(decoded)
          console.log("decoded is: ", decoded)
          setIsLoading(false)
        } else if (params.type === "album") {
          setDetails(decoded)
          console.log("decoded is: ", decoded)
          fetchAlbumTracks(decoded.id)
          setIsLoading(false)
        } else if (params.type === "artist") {
          setDetails(decoded)
          console.log(decoded)
          fetchArtistTracks(decoded.id)
          setIsLoading(false)
        }
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
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
      } else {
        setIsError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
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

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  useEffect(() => {
    fetchDetails()
  }, [params])

  if (params.type === "track") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {
                    isLoading &&
                    <Spinner animation="border" variant="dark" className="spinner mb-3"/>
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
          {details && !isLoading && <Container className="ml-3"><Row>
              <Col md={4} className="">
                {details.album && <img src={details.album.images[0].url} width="350px" height="350px" />}
              </Col>
              <Col md={2} className="text-muted mt-3" id="trackDetails">
                  <h4>{details.name}</h4>
                  {details.artists && <Link id="trackName" className="text-muted" to={"/details/artist/" + details.artists[0].id}><h5>{details.artists[0].name}</h5></Link>}
                  <h5>{millisToMinutesAndSeconds(details.duration_ms)}</h5>
              </Col>
              <Col md={3}>
                  <FontAwesomeIcon id="heartIcon" className="mt-3 hvr-pulse-grow" icon={isFavorite ? faHeartSolid : faHeart} onClick={onFavorite} />
              </Col>
          </Row></Container>}
          </Col>
          </Row>
          <MyFooter />
      </div>
    );
  }
  
  if (params.type === "album") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {
                    isLoading &&
                    <Spinner animation="border" variant="dark" className="spinner mb-3"/>
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
          {details && !isLoading &&
            <Container className="ml-3">
              {details && <Row>
                <Col md={3} className="text-muted" id="trackDetails">
                    {details.images && <img src={details.images[0].url} width="350px" height="350px" />}
                    <h4 className="mt-3">{details.name}</h4>
                    {details.artists && <Link to={"/details/artist/" + details.artists[0].id} id="trackName" className="text-muted"><h5>{details.artists[0].name}</h5></Link>}
                    <h6 className="mt-3">{details.total_tracks} tracks</h6>
                </Col>
                <Col md={8} className="albumTracks" id="tracks">
                    {albumTracks && albumTracks.map(track => {
                      console.log(track)
                      return <SingleTrack artistId={track.artists[0].id} id={track.id} small showCover={false} artist={track.artists[0].name} song={track.name} />
                    })}
                </Col>
            </Row>}
          </Container>}
          </Col>
          </Row>
          <MyFooter />
      </div>
    );
  }

  if (params.type === "artist") { 
    return (
      <div>
          <MyNavbar />
          <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>
          <Container className="ml-0"><PageCover /></Container>
          {
                    isLoading &&
                    <Spinner animation="border" variant="dark" className="spinner mb-3"/>
                }
                  {
                    isError &&
                    <Alert variant="danger" className="col-2">
                        An error occurred!
                    </Alert>
                }
          {details && !isLoading && 
            <Container className="ml-3">
              <Row>
                <Col md={3} className="text-muted" id="trackDetails">
                    {details.images && <img src={details.images[0].url} width="350px" height="350px" />}
                    <h3 className="mt-3">{details.name}</h3>
                </Col>
                <Col md={8} className="albumTracks" id="tracks">
                    <h4 className="text-muted ml-3 mt-3 mb-3" id="trackDetails">Top Tracks</h4>
                    {artistTracks && artistTracks.map(track => {
                      return <SingleTrack img={track.album.images[0].url} albumId={track.album.id} id={track.id} small showCover={true} song={track.name} />
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