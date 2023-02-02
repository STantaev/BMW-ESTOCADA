import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const { products, getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = (page - 1) * 3;
    const end = begin + 5;
    return products.slice(begin, end);
  }

  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
            md={9}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minHeight: "40vh",
                mb: "3.5vh",
              }}
            >
              {products ? (
                currentData().map((item) => (
                  <ProductCard item={item} key={item.id} />
                ))
              ) : (
                <h2>Loading...</h2>
              )}
            </Box>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <TextField
                id="input-with-icon-textfield"
                label="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  onChange={(e) => fetchByParams("type", e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />

                  <FormControlLabel
                    value="daily"
                    control={<Radio />}
                    label="daily"
                  />
                  <FormControlLabel
                    value="action"
                    control={<Radio />}
                    label="action"
                  />
                  <FormControlLabel
                    value="fantasy"
                    control={<Radio />}
                    label="fantasy"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item md={12}>
            <Pagination
              count={count}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={(e, p) => setPage(p)}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
