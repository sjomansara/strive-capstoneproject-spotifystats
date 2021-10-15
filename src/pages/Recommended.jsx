import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
import SideBar from "../components/SideBar";
import PageCover from "../components/PageCover";
import { Row, Col, Container } from "react-bootstrap";

const Recommended = () => {
  return (
    <div>
        <MyNavbar />
          <Row>
            <Col md={2}>
              <SideBar />
            </Col>
            <Col md={10}>
              <div>
                <Container className="ml-0"><PageCover /></Container>
                <Container></Container>
              </div>
            </Col>
          </Row>
        <MyFooter />
    </div>
  );
}

export default Recommended;