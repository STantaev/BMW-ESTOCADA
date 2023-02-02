import React, { createContext, useContext, useReducer } from "react";

import { calcQuantity, calcSubPrice, calcTotalPrice } from "../helpers/functions";
import { elementAcceptingRef } from "@mui/utils";

export const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };

      case "GET_QUANTITY":
        return { ...state, totalQuantity: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function setQuantity(arr) {
    const quantity = calcQuantity(arr);
    dispatch({
      type: "GET_QUANTITY",
      payload: quantity,
    });
  }

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }


    setQuantity(cart.products);

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    setQuantity(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    setQuantity(cart.products);
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };


  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(cart.products);
    dispatch({
      type: "GET_CART",
      payload: cart,
    });

  }

  function checkProductInCart(id){
    let cart = JSON.parse(localStorage.getItem("cart"));

    if(cart) {
        let newCart = cart.products.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
    } else {
        cart = {
            products: [],
            totalPrice: 0
        }
    }
  }

  function clearCart(){
    localStorage.clear()
    getCart()
}

  let value = {
    cart: state.cart,
    totalQuantity: state.totalQuantity,
    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProduct,
    checkProductInCart,

    clearCart
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
