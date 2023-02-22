import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/Notes/NoteState";
import { Alert } from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
  const [alert, setAlert] = useState({});
  const showAlert=(message, color)=>{
  setAlert({
    msg:message,
    clr:color
  })
  setTimeout(() => {
    setAlert({
     clr:"fixed top-0"
    });
  }, 2500);
  }
  const myProgress = (num)=>{
    setProgress(num);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}/>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home myProgress={myProgress} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/login" element={<Login myProgress={myProgress} showAlert={showAlert}/>}/>
            <Route exact path="/signup" element={<Signup myProgress={myProgress} showAlert={showAlert}/>}/>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
