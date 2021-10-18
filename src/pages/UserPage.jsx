import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";
import Cookies from 'universal-cookie'
import UserInfo from "../components/UserInfo";
import SingleArtist from "../components/SingleArtist";

const UserPage = () => {
  const [userData, setUserData] = useState()
  const [playlistData, setPlaylistData] = useState()
  const cookies = new Cookies()
  const token = cookies.get("token")

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        let decoded = await response.json()
        setUserData(decoded)
        console.log("user data is: ", decoded)
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUserData()
    fetchPlaylists()
  }, [])

  const fetchPlaylists = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/playlists?limit=10", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

      if (response.ok) {
        let decoded = await response.json()
        setPlaylistData(decoded.items)
        console.log("playlists is: ", decoded.items)
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <Container className="ml-0"><Profile userInfo={userData} /></Container>
        <Container><UserInfo userInfo={userData} /></Container>
        <Container id="playlists" className="ml-3 mt-5">
        <h4 className="text-muted mb-3">Your Playlists</h4>
        <Row>
        {playlistData && playlistData.map(playlist => {
          console.log("playlist is: ", playlist)
            return <a href={playlist.external_urls.spotify}><SingleArtist hideLink hideNumber img={playlist.images[0].url} artist={playlist.name}/></a>
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

export default UserPage;