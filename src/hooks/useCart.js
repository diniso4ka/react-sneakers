import React from "react";
import AppContext from "../context/context";

export const useCart = () => {
   const { cartItems, setCartItems } = React.useContext(AppContext)
   const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0)
   const tax = totalPrice / 100 * 5
   return { cartItems, setCartItems, totalPrice, tax }
}

