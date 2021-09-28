import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHome from './components/NavbarHome';
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';
import MyRectangle from './components/MyRectangle';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <Row>
      <MyJumbotron />
      <MyRectangle />
      </Row>
      <MyFooter />
    </div>
  );
}

export default App;
