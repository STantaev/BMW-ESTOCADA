import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { productDetails, getProductDetails, saveEditProduct } = useProduct();
  const params = useParams();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleChange = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Edit Panel</Typography>
      <TextField
        value={product.title || ""}
        id="outlined-basic"
        variant="outlined"
        name="title"
        label="Title"
        onChange={handleChange}
      />
      <TextField
        value={product.img || ""}
        id="outlined-basic"
        variant="outlined"
        name="img"
        label="Image"
        onChange={handleChange}
      />
      <TextField
        value={product.price || ""}
        id="outlined-basic"
        variant="outlined"
        name="price"
        label="Price"
        onChange={handleChange}
      />
      <TextField
        value={product.type || ""}
        id="outlined-basic"
        variant="outlined"
        name="type"
        label="Type"
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          saveEditProduct(params.id, product);
        }}
      >
        Save Product
      </Button>
    </Box>
  );
};

export default EditProduct;
