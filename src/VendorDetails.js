import React from 'react';
import vendor1 from './images/id1.jpg'
import {
    Avatar,
    Box,
    Typography,
  } from "@mui/material";
import { Cards } from './components/Cards';

export const VendorDetails = () => {
    return (
      <div>
        <Box
          sx={{
            p: 6,
            width: "100%",
            maxWidth: "90%",
            margin: "auto",
            alignItems: "center",
            borderRadius: "20px",
            border: "4px solid #f9f9f9",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Avatar
              src={vendor1}
              alt="products image"
              sx={{
                width: "300px",
                height: "350px",
                borderRadius: "5%",
                border: "4px solid #325240",
                boxShadow: "0px 16px 16px 5px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Box sx={{ width: "65%" }}>
              <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                <Box sx={{ flex: "0 1 25%", marginRight: 2 }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Vendor Name :
                  </Typography>
                </Box>
                <Box sx={{ flex: "1 1 84%" }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Kirtan Kalathiya
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                <Box sx={{ flex: "0 1 25%", marginRight: 2 }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Email Id :
                  </Typography>
                </Box>
                <Box sx={{ flex: "1 1 84%" }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    kirtan8574@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                <Box sx={{ flex: "0 1 25%", marginRight: 2 }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Address :
                  </Typography>
                </Box>
                <Box sx={{ flex: "0 1 85%" }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}>
                  65, Bhatni Wadi, Mira Nagar Society, Varachha, Surat, Gujarat 395006
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                <Box sx={{ flex: "0 1 25%", marginRight: 2 }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                    }}  >
                    Contact No :
                  </Typography>
                </Box>
                <Box sx={{ flex: "0 1 85%" }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }} >
                  9523048702
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                <Box sx={{ flex: "0 1 25%", marginRight: 2 }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      whiteSpace: "nowrap",
                    }} >
                    Total Products :
                  </Typography>
                </Box>
                <Box sx={{ flex: "0 1 85%" }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }} >
                    2
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            m: 5,
            color: "#325240",
            fontSize: "36px",
            fontWeight: "600",
            textAlign: "center",
            textDecoration: "underline ",
          }} >
          Vendor Products
        </Typography>
        <Box sx={{ mt: 7, width: "100%", maxWidth: "95%", margin: "auto" }}>
          <Cards/>
        </Box>
      </div>
    );
  };