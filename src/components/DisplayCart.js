import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import almond from "../images/almonds2.jpg";
const DisplayCart = () => {
    return (
        <div style={{ position: "relative", backgroundColor: "lightgray" }}>
        <div>
          <Typography
            sx={{
              color: "#325240",
              textAlign: "center",
              fontSize: "24px",
              marginTop: "15px",
              fontWeight: "bold",
            }}>
            MY CART
          </Typography>
          <Box
            sx={{
              padding: "10px",
            }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    bgcolor: "#f9f9f9",
                    border: "2px solid #325240",
                    borderRadius: "10px",
                    margin: 3,
                    padding: 1,
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                  }}>
                  <img
                    style={{
                      width: "75px",
                      height: "70px",
                      borderRadius: "10px",
                    }}
                    src={almond}
                    alt="crat products image"
                  />
                  <Box
                    sx={{
                      width: "100%",
                      marginRight: "8px",
                      marginLeft: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Box
                      sx={{
                        alignSelf: "center",
                        marginLeft: "20px",
                      }}>
                      <Typography
                        sx={{
                          color: "#325240",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}>
                       Almonds
                      </Typography>
                      <Typography
                        sx={{
                          color: "#325240",
                          fontSize: "14px",
                        }}>
                        Vendor : Rakesh chakalasiya
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#325240",
                        fontSize: "18px",
                        fontWeight: "bold",
                        alignSelf: "center",
                      }}>
                      ₹ 120
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignSelf: "center",
                        border: "2px solid #325240",
                        borderRadius: "5px",
                      }}>
                      <Button
                        sx={{
                          padding: "5px",
                          marginRight: "20px",
                          borderRadius: "0px",
                          borderTopLeftRadius: "2px",
                          borderBottomLeftRadius: "2px",
                          color: "#325240",
                          alignSelf: "center",
                          borderRight: "2px solid #325240",
                          "&:hover": {
                            bgcolor: "#325240",
                            color: "#f0f0f0",
                          },
                        }}>
                        <RiSubtractFill size="20" />
                      </Button>
                      <Typography
                        sx={{
                          color: "#325240",
                          fontSize: "18px",
                          alignSelf: "center",
                        }}>
                        1
                      </Typography>
                      <Button
                        sx={{
                          padding: "5px",
                          marginLeft: "20px",
                          borderRadius: "0px",
                          borderTopRightRadius: "2px",
                          borderBottomRightRadius: "2px",
                          color: "#325240",
                          alignSelf: "center",
                          borderLeft: "2px solid #325240",
                          "&:hover": {
                            color: "#f0f0f0",
                            bgcolor: "#325240",
                          },
                        }}>
                        <AiOutlinePlus size="20" />
                      </Button>
                    </Box>
                    <Typography
                      sx={{
                        color: "#325240",
                        fontSize: "18px",
                        fontWeight: "bold",
                        alignSelf: "center",
                        // marginRight: 5,
                      }}>
                      Total: ₹ 120
                    </Typography>
                    <Box sx={{ display: "flex", alignSelf: "center" }}>
                      <IconButton
                        sx={{
                          bgcolor: "#B10000",
                          padding: "5px",
                          borderRadius: "10px",
                          color: "#f0f0f0",
                          alignSelf: "center",
                          "&:hover": {
                            color: "#B10000",
                            border: "1px solid #B10000",
                          },
                        }}>
                        <AiFillCloseCircle size="25" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              
          </Box>
          <Box sx={{ padding: "20px" }}>
            <Box
              sx={{
                marginRight: 3,
                bgcolor: "#f9f9f9",
                border: "2px solid #325240",
                borderRadius: "10px",
                width: "100%",
                maxWidth: "50%",
                color: "#325240",
                marginLeft: "auto",
              }}>
              <Box
                sx={{
                  display: "flex",
                }}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    p: 2,
                    width: "100%",
                    maxWidth: "50%",
                  }}>
                  Total Item
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "400",
                    p: 2,
                    borderLeft: "2px solid #325240",
                    textAlign: "right",
                    width: "100%",
                    maxWidth: "50%",
                  }}>
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-around",
                  borderTop: "2px solid #325240",
                }}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    // textAlign: "center",
                    p: 2,
                    width: "100%",
                    maxWidth: "50%",
                  }}>
                  Total Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "400",
                    p: 2,
                    textAlign: "right",
                    borderLeft: "2px solid #325240",
                    width: "100%",
                    maxWidth: "50%",
                  }}>
                  ₹120
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-around",
                  borderTop: "2px solid #325240",
                  p: 2,
                }}>
                <Button
                  sx={{
                    bgcolor: "#325240",
                    color: "#f9f9f9",
                    marginLeft: "auto",
                    border: "2px solid transparent",
                    "&:hover": {
                      color: "#325240",
                      bgcolor: "#f9f9f9",
                      border: "2px solid #325240",
                    },
                  }}
                  onClick={() => {
                    window.location.replace("/ibid/checkout");
                  }}>
                  proceed to checkout
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
        </div>
    )
}
export default DisplayCart;