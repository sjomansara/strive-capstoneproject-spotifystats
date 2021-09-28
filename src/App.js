import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHome from './components/NavbarHome';
import MyJumbotron from './components/MyJumbotron';

function App() {
  return (
    <div className="App">
      <NavbarHome />
      <MyJumbotron />
    </div>
  );
}

export default App;
