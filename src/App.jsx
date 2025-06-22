import './index.css';
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import ViewItems from "../src/pages/ViewItem.jsx";
import AddItems from "../src/pages/AddItem.jsx";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



function App(){
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Vintage Camera",
      type: "Electronics",
      description: "Old school camera",
      imageUrl: "/camera1.jpeg",
      extraImages: ["/coffee1.jpeg", "/Camera.jpeg"],
    },
    {
    id: 2,
    name: "Antique Vase",
    type: "Decor",
    description: "Hand-painted porcelain vase from Pinterest.",
    imageUrl: "/vase.jpeg",
    extraImages: ["/Vase1.jpeg", "/images/vase2.jpeg"]
  },
  {
    id: 3,
    name: "Retro Lamp",
    type: "Lighting",
    description: "Functional and stylish lamp.",
    imageUrl: "/lamp.jpeg",
    extraImages: ["/images/lamp1.jpeg", "/images/lamp2.jpeg"]
  },
  {
    id: 4,
    name: "Coffee",
    type: "Food",
    description: "My new addiction :)",
    imageUrl: "/coffee.jpeg",
    extraImages: ["/images/lamp1.jpeg", "/images/lamp2.jpeg"]
  },
  {
    id: 5,
    name: "coins",
    type: "Hobby",
    description: "Cool coin from 1955",
    imageUrl: "/coins.jpeg",
    extraImages: ["/images/lamp1.jpeg", "/images/lamp2.jpeg"]
  }
  ]);
  return (
    
    <div className='relative z-0'>
         <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ViewItems items={items} setItems={setItems} />} />
        <Route path='/add' element={<AddItems items={items} setItems={setItems}/>} />
      </Routes>
      </Router> 
      

    </div>
  )
}

export default App;