import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Details from './components/details';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <NavBar/>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />

          <Route path="/details" element={<Details />} />
      </Routes>   
     </BrowserRouter>

    </div>
  );
}

export default App;
