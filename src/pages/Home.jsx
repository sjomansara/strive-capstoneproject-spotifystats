import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar';
import MyJumbotron from '../components/MyJumbotron';
import MyFooter from '../components/MyFooter';
import MyRectangle from '../components/MyRectangle';
import { Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Row>
      <MyJumbotron />
      <MyRectangle />
      </Row>
      <MyFooter />
    </div>
  );
}

export default Home;