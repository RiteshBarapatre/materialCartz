import Fab from "@mui/material/Fab";
import React from "react";
import styles from "../../styles/Right.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useEffect } from "react";

const Right = ({cartProducts,setCartProducts}) => {

  const [noItem,setNoItem] = useState(false)
 

  const deleteItem = (index)=>{
    setCartProducts(cartProducts.filter((_,ind)=>{
      return ind !== index
    }))
  }

  // useEffect(()=>{
  //   if(cartProducts === []){
  //     setNoItem(true)
  //   }
  // })

  return (
    <div className={styles.right}>
      <div className={styles.right__header}>
        <Fab
          style={{
            backgroundColor: "#dbeafe",
            color: "blue",
            fontSize: "20px",
          }}
          size="medium"
        >
          {cartProducts.length}
        </Fab>
        <h3>Product Added</h3>
      </div>
      <div className={styles.right__items}>
      {
        cartProducts.map((elem,index)=>{
          return <div className={styles.item} key={index}>
          <img
            src={elem.img}
            alt="image of metal"
            width={50}
            height={40}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
          <p style={{ fontSize: "14px", color: "grey" }}>{elem.title}</p>
          <IconButton aria-label="delete" onClick = {()=>deleteItem(index)}>
            <DeleteIcon />
          </IconButton>
        </div>
        })
      }
        
      </div>
      <div className={styles.right__footer}>
      <Button variant="contained" style={{backgroundColor : "rgb(0, 127, 255)"}}>Ask Quotation</Button>
      </div>
    </div>
  );
};

export default Right;
