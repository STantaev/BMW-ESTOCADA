import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartProduct } = useCart();

  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item>
        <Box
          component="img"
          sx={{
            height:150,
            width: 270,
          }}
          src={item.item.img}
          alt={item.item.title}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h6" component="div">
          {item.item.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h6" component="div">
          {item.item.type}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="text.secondary">
          Price: {item.item.price}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="text.secondary">
          Quantity:{" "}
          <input
            type="number"
            value={item.count}
            onChange={(e) => changeProductCount(e.target.value, item.item.id)}
            min={24}
            max={100}
          ></input>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="text.secondary">
          SubPrice: {item.subPrice}
        </Typography>
      </Grid>
      <Grid item>
        <Button
        sx={{background:"red" ,color: "black"}}
          variant="outlined"
          size="small"
          onClick={() => deleteCartProduct(item.item.id)}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
