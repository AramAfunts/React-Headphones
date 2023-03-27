import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import New from "./pages/New";

function App() {

  const [products, setProducts] = React.useState([
    { key: 1, name: 'Airpods Pro',  price: 79.99, image: 'img/products/1.png' },
    { key: 2, name: 'Hama Fun', price: 9.99, image: 'img/products/2.jpg' },
    { key: 3, name: 'Panasonic RP-HS46E', price: 19.99, image: 'img/products/3.jpg' },
    { key: 4, name: 'Panasonic RP-TCM55', price: 19.99, image: 'img/products/4.png' },
    { key: 5, name: 'Promate Harmoni', price: 39.99, image: 'img/products/5.png' },
    { key: 6, name: 'Hoco True EW43', price: 69.99, image: 'img/products/6.png' },
  ])

  const [deals, setDeals] = React.useState([
    { key: 1, product: 'Airpods Pro', location: 'Yerevan (Armenia)' },
    { key: 2, product: 'Airpods Max', location: 'Gyumri (Armenia)' },
    { key: 3, product: 'Airpods Pro', location: 'Goris (Armenia)' },
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/deals" element={<Deals deals={deals} />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
