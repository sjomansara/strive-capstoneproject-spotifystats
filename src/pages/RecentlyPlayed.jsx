import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col } from "react-bootstrap";
import SingleRecent from "../components/SingleRecent";

const RecentlyPlayed = () => {
  return (
    <div>
        <MyNavbar />
        <Row>
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        <div>
        <PageCover />
        <SingleRecent />
        </div>
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default RecentlyPlayed;