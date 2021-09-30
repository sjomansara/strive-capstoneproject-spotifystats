import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col } from "react-bootstrap"
import PageCover from "../components/PageCover";

const Tracks = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <PageCover />
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Tracks;