import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHome from '../components/NavbarHome';
import MyJumbotron from '../components/MyJumbotron';
import MyFooter from '../components/MyFooter';
import MyRectangle from '../components/MyRectangle';
import { Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <Row>
      <MyJumbotron />
      <MyRectangle />
      </Row>
      <MyFooter />
    </div>
  );
}

export default Home;