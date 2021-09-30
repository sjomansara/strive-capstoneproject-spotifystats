import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col } from "react-bootstrap"
import SingleArtist from "../components/SingleArtist";

const Artists = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <PageCover />
        <SingleArtist />
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Artists;