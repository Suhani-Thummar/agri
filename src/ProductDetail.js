import React from 'react';
import almond from './images/almonds2.jpg';
import {Typography,Button,Box,Avatar} from '@mui/material';
import { BsBasketFill } from "react-icons/bs";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/system";
import {Cards} from "./components/Cards";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #325240;
  }

  &:focus {
    color: #f9f9f9;
    border-radius: 3px;
    outline: 2px solid #f9f9f9;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #f9f9f9;
    color: #325240;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  margin-top: 30px;
  margin-bottom: 90px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #325240;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
export const ProductDetail = () => {
    
  return (
    <div>
            <Box
              sx={{
                p: 4,
                width: "100%",
                maxWidth: "90%",
                margin: "auto",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Avatar
                  src={almond}
                  alt="products image"
                  sx={{
                    width: "400px",
                    height: "450px",
                    borderRadius: "5%",
                    border: "4px solid #f9f9f9",
                    boxShadow: "0 18px 18px 8px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: "0 20px 20px 0 rgba(0, 0, 0, 0.2)",
                    },
                  }}
                />
                <Box
                  sx={{
                    width: "600px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "32px", fontWeight: "600", color: "#325240" }}
                  >
                    Almonds
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "300",
                      color: "#325240",
                      mt: 2,
                    }}
                  >
                  California Almonds are bite-sized all-rounders when it comes to keeping you young & fit.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#325240",
                      mt: 2,
                    }}
                  >
                    Category : nuts
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#325240",
                      mt: 1,
                    }}
                  >
                    Price : ₹ 120 /-
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "200",
                      color: "#325240",
                      mt: 0,
                    }}
                  >
                    Unit : Kg
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "200",
                      color: "#325240",
                      mt: 1,
                    }}
                  >
                    HSN : 45678
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "300",
                      color: "#325240",
                      mt: 1,
                      pb: 1,
                      borderBottom: "2px solid #fff",
                    }}
                  >
                    In Stock
                  </Typography>
                  <Button
                    sx={{
                      color: "#f9f9f9",
                      bgcolor: "#325240",
                      border: "2px solid transparent",
                      mt: 2,
                      p: 1,
                      "&: hover": {
                        border: "2px solid #325240",
                        color: "#325240",
                      },
                    }}  >
                    <BsBasketFill size="25" />
                    <Typography sx={{ ml: 2, mr: 2 }}>add to cart</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 7, m: 2 }}>{ProductsDetailTab()}</Box>
            </div>
            );
};

const ProductsDetailTab = () => {
              return (
                <TabsUnstyled defaultValue={0}>
                  <TabsList>
                    <Tab>DESCRIPTION</Tab>
                    <Tab>VENDOR INFO</Tab>
                    <Tab>MORE FROM VENDOR</Tab>
                  </TabsList>
                  <TabPanel value={0}>
                    <Typography
                      sx={{ color: "#325240", fontSize: "20px", fontWeight: "300" }}
                    >
                    It's food for the brain, keeping your memory sharp. They are packed full of nutrients. 
                    The wholesome constituents of these nuts provide the required amount of energy to the body and 
                    help maintain brain health. Makes a healthy and tasty addition to both sweets and savouries. 
                    Store in a cool, dry place in an airtight container and preferably refrigerate after opening 
                    It's food for the brain, keeping your memory sharp. They are packed full of nutrients. 
                    The wholesome constituents of these nuts provide the required amount of energy to the body and 
                    help maintain brain health. Makes a healthy and tasty addition to both sweets and savouries. 
                    Store in a cool, dry place in an airtight container and preferably refrigerate after opening
                    </Typography>
                  </TabPanel>
                  <TabPanel value={1}>
                    <Box>
                      <table
                        style={{
                          margin: " 0 -1px 24px 0",
                          textAlign: "left",
                          width: "100%",
                          maxWidth: "80%",
                          margin: "auto",
                          borderCollapse: "separate",
                          border: "none",
                          borderSpacing: "0px",
                          border: "2px solid #325240",
                          borderRadius: "10px",
                        }}
                        class="table-checkout" >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: "12px 20px",
                                // border: "1px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  float: "Left",
                                }} >
                                Vendor Name
                              </Typography>
                            </td>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderLeft: "2px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft: "auto",
                                  float: "Left",
                                }} >
                                Kirtan Kalathiya
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderTop: "2px solid #325240",
                              }}>
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  float: "Left",
                                }} >
                                Email Id
                              </Typography>
                            </td>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderLeft: "2px solid #325240",
                                borderTop: "2px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft: "auto",
                                  float: "Left",
                                }} >
                                kirtan8574@gmail.com
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderTop: "2px solid #325240",
                              }}  >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  float: "Left",
                                }} >
                                City Name
                              </Typography>
                            </td>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderLeft: "2px solid #325240",
                                borderTop: "2px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft: "auto",
                                  float: "Left",
                                }}  >
                                Surat
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderTop: "2px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  float: "Left",
                                }}  >
                                Contact No
                              </Typography>
                            </td>
                            <td
                              style={{
                                padding: "12px 20px",
                                borderLeft: "2px solid #325240",
                                borderTop: "2px solid #325240",
                              }} >
                              <Typography
                                sx={{
                                  color: "#325240",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft: "auto",
                                  float: "Left",
                                }} >
                                +91 9523045874
                              </Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Box>
                  </TabPanel>
                  <TabPanel value={2}>
                    <Box sx={{ width: "100%", maxWidth: "98%", margin: "auto" }}>
                      <Cards/>
                    </Box>
                  </TabPanel>
                </TabsUnstyled>
              );
            };
  