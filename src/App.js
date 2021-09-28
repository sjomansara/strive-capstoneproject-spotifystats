import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHome from './components/NavbarHome';
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
