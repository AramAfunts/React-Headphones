import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import New from "./pages/New";
import Account from "./pages/Account";

function App() {
  const [products, setProducts] = React.useState([
    { key: 1, name: "Airpods Pro", price: 79.99, image: "img/products/1.png" },
    { key: 2, name: "Hama Fun", price: 9.99, image: "img/products/2.jpg" },
    {
      key: 3,
      name: "Panasonic RP-HS46E",
      price: 19.99,
      image: "img/products/3.jpg",
    },
    {
      key: 4,
      name: "Panasonic RP-TCM55",
      price: 19.99,
      image: "img/products/4.png",
    },
    {
      key: 5,
      name: "Promate Harmoni",
      price: 39.99,
      image: "img/products/5.png",
    },
    {
      key: 6,
      name: "Hoco True EW43",
      price: 69.99,
      image: "img/products/6.png",
    },
  ]);

  const [cart, setCart] = React.useState([]);

  const [favorites, setFavorites] = React.useState([
    { key: 1, name: "Airpods Pro", price: 79.99, image: "img/products/1.png" },
    { key: 2, name: "Hama Fun", price: 9.99, image: "img/products/2.jpg" },
  ]);

  const [deals, setDeals] = React.useState([
    { key: 1, product: "Airpods Pro", location: "Yerevan (Armenia)" },
    { key: 2, product: "Airpods Max", location: "Gyumri (Armenia)" },
    { key: 3, product: "Airpods Pro", location: "Goris (Armenia)" },
  ]);

   const [sortingOption, setSortingOption] = React.useState('');

  const numAscending = [...products].sort((a, b) => a.price - b.price);

  const numDescending = [...products].sort((a, b) => b.price - a.price);

  const strAscending = [...products].sort((a, b) => (a.name > b.name ? 1 : -1));

  const handleSortingOption = (e) => {
    setSortingOption(e.target.value);

    switch(e.target.value) {
      case 'Name': 
        setProducts(strAscending);
        break;

      case 'Price: Lowest to highest':
        setProducts(numAscending);
        break;

      case 'Price: Highest to lowest':
        setProducts(numDescending);
        break;

      default:
        setProducts(strAscending);
    } 
  }
  
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToFavorites = (product) => {
    setFavorites((prev) => [...prev, product]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              handleSortingOption={handleSortingOption}
              sortingOption={sortingOption}
            />
          }
        />
        <Route path="/deals" element={<Deals deals={deals} />} />
        <Route path="/new" element={<New />} />
        <Route path="/account" element={<Account favorites={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;
