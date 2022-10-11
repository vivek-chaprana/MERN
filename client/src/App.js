import './App.css';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import About from './Components/About';
import Login from './Components/Login';
import Logout from './Components/Logout';
import PageNotFound from './Components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { createContext, useReducer } from 'react';
import {reducer, initialState} from './Reducer/UseReducer'

//Context API
export const userContext = createContext()


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <userContext.Provider value={{state , dispatch}} >
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </userContext.Provider>
    </>
  );
}

export default App;
