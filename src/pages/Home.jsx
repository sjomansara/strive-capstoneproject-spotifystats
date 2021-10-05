import 'bootstrap/dist/css/bootstrap.min.css';
import MyJumbotron from '../components/MyJumbotron';
import MyNavbar from '../components/MyNavbar';
import MyRectangle from '../components/MyRectangle';
import { Row } from 'react-bootstrap';
import MyFooter from '../components/MyFooter';


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