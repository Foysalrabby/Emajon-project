import Header from "./Component/Header.js/Header";
import Inventory from "./Component/Inventory/Inventory";
import Review from "./Component/Review/Review";
import Shop from "./Component/Shop/Shop";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Header></Header>

   <Routes>
  
    <Route exact path="/" element={<Shop/>} />
    <Route  path="/review" element={<Review/>} />
    <Route  path="/inventory" element={<Review/>} />
  

  </Routes>  

    </div>
  );
}

export default App;
