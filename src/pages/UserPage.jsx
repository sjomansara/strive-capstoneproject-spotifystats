import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import { Row, Col } from "react-bootstrap"

const UserPage = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Profile />
        </Row>
        <MyFooter />
    </div>
  );
}

export default UserPage;