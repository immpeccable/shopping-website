import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Products from './Products';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;