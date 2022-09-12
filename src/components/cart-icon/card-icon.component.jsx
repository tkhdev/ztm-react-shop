import { useContext } from "react";
import { ReactComponent as CartIconSvg } from "../../assets/svg/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setCartIsOpen, cartIsOpen, cartCount } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setCartIsOpen(!cartIsOpen)}
    >
      <CartIconSvg className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
