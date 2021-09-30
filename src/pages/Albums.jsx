import MyFooter from "../components/MyFooter"
import MyNavbar from "../components/MyNavbar"
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col } from "react-bootstrap"
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
        <PageCover />
        <SingleAlbum />
        </Col>
        </Row>
        <MyFooter />
    </div>
  );
}

export default Albums;