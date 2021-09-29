import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col } from "react-bootstrap"

const Tracks = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <h1>Tracks</h1>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Tracks;