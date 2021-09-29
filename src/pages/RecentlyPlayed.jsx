import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import { Row, Col } from "react-bootstrap"

const RecentlyPlayed = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default RecentlyPlayed;