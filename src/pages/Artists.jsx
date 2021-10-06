import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container, Spinner, Alert } from "react-bootstrap"
import SingleArtist from "../components/SingleArtist";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

const Artists = () => {
  const [artists, setArtists] = useState("")
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const cookies = new Cookies()
  const token = cookies.get("token")
  const params = useParams()
  console.log(params)
  
  let counter = 0
  let fetchString = "https://api.spotify.com/v1/me/top/artists"

  switch (params.time) {
    case ("short_term"):
      fetchString += "?time_range=short_term"
      break
    case ("long_term"):
      fetchString += "?time_range=long_term"
      break
  }

  const fetchArtists = async () => {
    try {
      const response = await fetch(fetchString, {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        const decoded = await response.json()
        console.log(decoded)
        setArtists(decoded.items)
      } else {
        setIsError(true)
        setIsLoading(false)
      }
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArtists()
  }, [params])

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
        <Row>
        {artists && artists.map(result => {
                  counter += 1
                  return <SingleArtist key={result.id + (Math.random() * 10000)} showTimes hasNumbers={true} number={counter} img={result.images[0].url} artist={result.name}/>
                }
              )}
        </Row>
        </Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Artists;