import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import vendor1 from './images/vendor1.png';
import id1 from "./images/id1.jpg"
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FaPhoneAlt } from "react-icons/fa";

export default function VendorCard() {
  return (
    <Box
    sx={{
      border: "2px solid #325240",
      borderRadius: "27px",
      marginBottom: 3,
      marginTop: 3,
      height: "40vh",
      position: "relative",
      width: "60vh",
      margin: "20px",
      boxShadow: "0px 16px 16px 5px rgba(0, 0, 0, 0.2)",
      transform: "scale(1)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0 20px 20px 0 rgba(0, 0, 0, 0.2)",
      },
    }}
  >
    <img
      src={vendor1}
      alt="banner"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "25px",
      }}/>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        padding: "20px",
      }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600px",
          color: "#325240",
        }}>
        Kirtan Kalathiya
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "300px",
          color: "#325240",
          mt: 1,
        }}>
        58,vrundavan soc,dabholi char rasta,katargam,surat
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "300px",
          color: "#325240",
          mt: 1,
        }}>
        <FaPhoneAlt /> +91 8597256354
      </Typography>
    </Box>
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        zIndex: 99,
        right: 0,
        mb: 3,
        mr: 3,
      }}>
      <Avatar
        alt="Remy Sharp"
        src={id1}
        sx={{
          width: 75,
          height: 75,
          border: 3,
          borderColor: "#f9f9f9",
          boxShadow: "0px 16px 16px 10px rgba(0, 0, 0, 0.3)",
        }}/>
    </Box>
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        bgcolor: "#325240",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}>
      <IconButton
        sx={{ color: "#f9f9f9", paddingLeft: 3 }}>
        <IoIosArrowDroprightCircle size="30" />
      </IconButton>
    </Box>
  </Box>
  );
}
