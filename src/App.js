import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
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

  //Context로 전역 상태 관리 후 변경 예정
  return (
    <>
      <Header onShow={showCartHandler} />
      {isCartShow && <Cart onShow={showCartHandler} onHide={hideCartHandler} />}
      <Meals />
    </>
  );
}

export default App;
