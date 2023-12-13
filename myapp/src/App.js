// App.js
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Details from './components/details';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/item/:id' element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
