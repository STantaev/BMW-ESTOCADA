import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useProduct } from "../../contexts/ProductContextProvider";
const AddProduct = () => {
  const { addProduct } = useProduct();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    img: "",
    type: "1",
  });

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
      <Typography>Add Product Panel</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="title"
        label="Title"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="img"
        label="Image"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="price"
        label="Price"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        name="type"
        label="Type"
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          addProduct(product);
        }}
      >
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
