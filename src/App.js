// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState({ msg: "Light mode has been enabled", type: "danger" });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () => { //its here since setmode is here 
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils-DarkMode';
      showAlert("Dark mode has been enabled", "success");
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils-LightMode';
      showAlert("Light mode has been enabled", "success");

    }
  }


  return (
    <>

      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route> */}
        {/* {/* <Route exact path="/about" element={<About />} > */}
        <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
        {/* </Route> */}
        {/* /users --->Component1
                /users/home -->--> Component 2 */}
        {/* <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}> */}

        {/* </Route> */}
        {/* </Routes> */}
      </div >
      {/* </Router > */}
    </>
  );
}

export default App;
