import React from "react";
import styles from "../../styles/Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="" width={40} height={40} />
        <h2>R Materials</h2>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Product, Category , Brand...(Not supported by firebase)"
        />
        <SearchIcon color="primary" style={{padding : "5px"}}/>
      </div>
      <Stack spacing={1} direction="row" color="white" >
        <Button variant="contained" style={{backgroundColor : "rgb(0, 127, 255)"}}><LocalOfferIcon style={{paddingRight : "2px"}}/>Brand Store</Button> 
        <Button variant="contained" style={{backgroundColor : "rgb(0, 127, 255)"}}><ShoppingCartIcon style={{paddingRight : "2px"}}/>Cart</Button>
        <Button variant="contained" style={{backgroundColor : "rgb(0, 127, 255)"}}><AccountCircleIcon style={{paddingRight : "2px"}}/>Login</Button>
      </Stack>
    </div>
  );
};

export default Navbar;
