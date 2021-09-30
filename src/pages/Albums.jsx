import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap"
import SingleAlbum from "../components/SingleAlbum";

const Albums = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <Container className="ml-0"><PageCover /></Container>
        <Container className="ml-0"><SingleAlbum /></Container>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;