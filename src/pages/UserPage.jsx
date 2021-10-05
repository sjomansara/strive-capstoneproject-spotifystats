import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";
import Cookies from 'universal-cookie'

const UserPage = () => {
  const [userData, setUserData] = useState()
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
        console.log(decoded)
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <Container className="ml-0"><Profile userInfo={userData} /></Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default UserPage;