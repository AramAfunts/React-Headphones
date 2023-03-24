import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import New from "./pages/New";

function App() {

  const [deals, setDeals] = React.useState([
    { key: 1, product: 'Airpods Pro', location: 'Yerevan (Armenia)' },
    { key: 2, product: 'Airpods Max', location: 'Gyumri (Armenia)' },
    { key: 3, product: 'Airpods Pro', location: 'Goris (Armenia)' },
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals deals={deals} />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;
