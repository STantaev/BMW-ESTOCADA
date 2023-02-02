import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";

import CartItem from "./CartItem";

const Cart = () => {
  const { cart, getCart, clearCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);


  return (
    <>
      <h1>My Cart</h1>
      <Container>
        {cart?.products.map((cartItem) => {
          {
            return <CartItem item={cartItem} key={cartItem.item.id} />;
          }
        })}
      </Container>
      <Container>
        <Button variant="outlined" onClick={clearCart}>
          BUY
        </Button>
        <Typography fontSize={21}>Total Price :{cart?.totalPrice}</Typography>
      </Container>
    </>
  );
};

export default Cart;
