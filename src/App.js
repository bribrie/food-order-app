import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
import "./App.scss";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCartHandler = () => {
    setIsCartShow(true);
  };

  const hideCartHandler = () => {
    setIsCartShow(false);
  };

  return (
    <CartProvider>
      <Header onShow={showCartHandler} />
      {isCartShow && <Cart onShow={showCartHandler} onHide={hideCartHandler} />}
      <Meals />
    </CartProvider>
  );
}

export default App;
