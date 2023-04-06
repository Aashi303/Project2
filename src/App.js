import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Product from "./Components/Product";
import Home from "./Components/Home";
import ContactUS from "./Components/ContactUS";
import Blogs from "./Components/Blogs";
import Product1 from "./Components/Product1";
import Footer from './Components/Footer';
import New from './New';
import Hook1 from './Components3/Hook1';
import Hook2 from './Components3/Hook2';
import Hook3 from './Components3/Hook3';
import Hook4 from './Components3/Hook4';
import Hook5 from './Components3/Hook5';
import Hook6 from './Components3/Hook6';
import Comp1 from './Components2/Comp1';
import Hook8 from './Components3/Hook8';
import Hook9 from './Components3/Hook9';
import Hook10 from './Components3/Hook10';





function App() {
  return (
    <div>
    <div style={{color:"blue",backgroundColor:"pink"}}><h1 align="center">Welcome to questions Family</h1></div>
    <Nav/>
    {/* <Router>
    <Routes> 
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="Contact" element={<ContactUS/>}/>
      <Route exact path="Product" element={<Product1/>}/>
      <Route exact path="Blogs" element={<Blogs/>}/>
    </Routes>
    </Router>
    <New />
    <Hook2 />
    <Hook3/>
    <Hook4/> */}
    {/* <Hook4/>
    <Hook5/> */}
    {/* <Hook6/>
    <Comp1/> */}
    <Hook8/>
    <Hook9/>
    <Hook10/>
    {/* <Footer/> */}
   
    </div>
  );
}

export default App;
