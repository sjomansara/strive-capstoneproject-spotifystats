import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import { Row, Col, Container } from "react-bootstrap"

const UserPage = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <Container className="ml-0"><Profile /></Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default UserPage;