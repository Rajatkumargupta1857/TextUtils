
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextUtils" AboutText="AboutUs" />
     <div className="container my-3">
          <TextForm heading="Enter the Text to anilize"/>
          {/* <About/> */}
     </div>
    
    </>

  );
}

export default App;
