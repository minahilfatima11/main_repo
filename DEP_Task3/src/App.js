import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
   
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>


      </Routes>
        <Footer />
        
  
    </BrowserRouter>
    
  );
}

export default App;
