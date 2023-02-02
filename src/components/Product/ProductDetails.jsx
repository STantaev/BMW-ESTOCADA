import {
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();

  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id);
  }, []);
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" mt="20px">
        <Link underline="hover" color="inherit" to="/">
          home
        </Link>
        <Link underline="hover" color="inherit" to="/products">
          products
        </Link>
        <Typography color="text.primary">{productDetails.id}</Typography>
      </Breadcrumbs>
      <Grid
        mt={3}
        container
        spacing={2}
        // sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          md={6}
          borderRadius="10px"
          bgcolor="gray"
          p="23px"
          // boxShadow="10px 10px 10px black"
        >
          {/* <img width="100%" objectFit="cover" src={productDetails.img} /> */}
        </Grid>
        <Grid md={6} p="20px">
          <Stack spacing={5}>
            <Paper p="20px">
              <Divider>
                <Chip label="TITLE" />
              </Divider>
              {/* <Typography variant="h4">{productDetails.title}</Typography> */}
            </Paper>
            <Paper p="20px">
              <Divider>
                <Chip label="TYPE" />
              </Divider>
              {/* <Typography variant="h5">{productDetails.type}</Typography> */}
            </Paper>
            <Paper p="20px">
              <Divider>
                <Chip label="PRICE" />
              </Divider>
              {/* <Typography variant="h6">{productDetails.price}</Typography> */}
            </Paper>

            <Grid>
              <Button
                onClick={() => addProductToCart(productDetails)}
                variant={
                  checkProductInCart(productDetails.id)
                    ? "outlined"
                    : "contained"
                }
                // disabled={true}
                color="error"
              >
                {checkProductInCart(productDetails.id)
                  ? "ALREADY IN CART"
                  : "ADD TO CART"}
              </Button>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProductDetails;
