import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");   // where dark mode is enable or not
  const [alert, setalert] = useState(null);

const showAlert=(massage, type)=>{
 setalert({
  msg:massage,
  type:type
 })
 setTimeout(() => {
  setalert(null);
 }, 1500);
}

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode('dark');
      document.body.style.backgroundColor="#23243a";
      showAlert("Dark mode has been Enabled" ,"success");
     document.title="TextUtil DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="White";
      showAlert("Light mode has been Enabled" ,"success");
      document.title="TextUtil DarkMode";
    }
 }
  return (
    <>
    <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                  <Alert alert={alert} />
                 <div className="container my-3">
                    <Routes>  
                            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra space" mode={mode} />} ></Route>
                            <Route exact path="about" element={<About mode={mode}/>} ></Route> 
                      </Routes>                        
                  </div>
    </Router>  
    </>

  );
}

export default App;
