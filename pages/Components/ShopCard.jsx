import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../../styles/Card.module.css"
import Badge from '@mui/material/Badge';

const ShopCard = ({img,title,setCartProducts,cartProducts})=> {

  // const [add,setAdd] = useState(false)

  const addToCart = (img,title)=>{
    setCartProducts([...cartProducts,{img,title}])
  }
    
  return (
    <Badge color="success">
    <Card className={styles.card} sx={{width : 170}}>
      <CardMedia
        sx={{ height: 100}}
        image={img}
      />
      <div className={styles.cardInfo}>
        <Typography gutterBottom variant="h6" textAlign="center" component="div" fontWeight="bolder">
          {title} <br />
        <Button variant="outlined" fullWidth onClick={()=>addToCart(img,title)}>Add to Cart</Button>
        </Typography>
      </div>
    </Card>
    </Badge>
  );
}

export default ShopCard