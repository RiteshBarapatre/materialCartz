import React, { useEffect } from "react";
import styles from "../../styles/Center.module.css";
import ShopCard from "./ShopCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";


const Center = ({setCartProducts,cartProducts,items,filter}) => {
 
  return (
    <div className={styles.center}>
      <h3>Search Aluminium Product</h3>
      <p>Showing {filter.length} products of 10 products</p>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          columnSpacing={0.2}
          rowSpacing={2}
        >
          {filter.map((elem, index) => {
            return (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <ShopCard img={elem.img} title={elem.title} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
                </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Center;
