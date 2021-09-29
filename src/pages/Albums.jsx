import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col } from "react-bootstrap"

const Albums = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <h1>Albums</h1>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;