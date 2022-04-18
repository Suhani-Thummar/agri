import React from 'react';
import nutmeg from '../images/Nutmeg2.jpg';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

export const Cards = () => {
  
  const useStyles = makeStyles(() => ({
    menuPaper: {
      maxHeight: 300,
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    productCard: {
      width: "262px",
      margin: "20px",
      padding: "10px",
      position: "relative",
      background: "#f9f9f9",
      border: "1.5px solid #325240",
      borderRadius: "10px",
      boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      transform: "scale(1)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 20px 20px 0 rgba(0, 0, 0, 0.2)",
      },
    },
    badge: {
      position: "absolute",
      right: "0",
      top: "0",
      margin: "25px",
      fontSize: "13px",
      padding: "10px",
      borderRadius: "50%",
      background: "#f9f9f9",
      color: "#325240",
      border: "1px solid #325240",
      zIndex: "2",
      overflow: "hidden",
      transform: "scale(1)",
      "&:hover": {
        background: "#325240",
        color: "#f9f9f9",
        border: "2px solid #f0f0f0",
        transform: "scale(1.01)",
        /* box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2)", */
      },
    },
    productTumb: {
      width: "100%",
      height: "270px",
      borderRadius: "5%",
      boxShadow: "0 8px 8px 4px rgba(0, 0, 0, 0.2)",
      border: "2px solid #325240",
      overflow: "hidden",
      "& img": {
        width: "100%",
        height: "100%",
        transform: "scale(1)",
        transition: "all 0.5s ease-in-out",
      },
      "& :hover": {
        transform: "scale(1.2)",
      },
    },
    productDetails: {
      "& h3": {
        fontWeight: "600",
        marginBottom: "14px",
        marginTop: "14px",
        textAlign: "center",
        textTransform: "capitalize",
        color: "#325240",
        textDecoration: "none",
        transition: "0.3s",
      },
      "& p": {
        fontSize: "15px",
        lineHeight: "22px",
        marginBottom: "18px",
        color: "#325240",
      },
    },
  
    productBottomDetails: {
      padding: "10px",
      overflow: "hidden",
      borderTop: "2px solid #325240",
      paddingTop: "10px",
      "& div": {
        float: "left",
        width: "50%",
      },
      "& small": {
        textAlign: "center",
        color: "#325240",
        fontSize: "80%",
        fontWeight: "600",
      },
    },
  
    productPrice: {
      fontSize: "16px",
      color: "#325240",
      fontWeight: "600",
      "& small": {
        marginLeft: "5px",
        fontSize: "90%",
        fontWeight: "400",
        textDecoration: "line-through",
        display: "inline-block",
      },
    },
    productLinks: {
      textAlign: "right",
      color: "#325240",
    },
  }));

  const classes = useStyles();
  return (
    <div>
    <Box className={classes.productCard}>
    <Box className={classes.productTumb}>
    <img
      src={nutmeg}
      alt="products_img"
    />
  </Box>
  <Box className={classes.productDetails}>
    <h3>Nutmeg</h3>

    <Box className={classes.productBottomDetails}>
      <Box className={classes.productPrice}>
        Price : ₹1600.00
        <br />
        <small>₹1650.00</small>
      </Box>
      {/* <Box className={classes.productLinks}>{data.pro_unit}</Box> */}
      <Box className={classes.productLinks}>
        Kg
        <br />
        <Typography>In stock</Typography>
      </Box>
    </Box>
    </Box>
    </Box>
    </div>
  )
}

