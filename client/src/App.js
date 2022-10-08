import './App.css';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import About from './Components/About';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
