import React from 'react';
import {Typography,Button} from '@mui/material';
export const Checkout = () => {
    return (
<div>
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
            }}
            class="table-checkout">
            <tbody>
                  <tr class="cart_item">
                    <td
                      style={{
                        padding: "12px 20px",
                        border: "1px solid #e6e6e6",
                      }}>
                      <Typography
                        sx={{
                          color: "#325240",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}>
                        Almonds x 1
                        <br />
                        <Typography>Vendor: Rakesh chakalasiya</Typography>
                      </Typography>
                    </td>
                    <td
                      style={{
                        padding: "12px 20px",
                        border: "1px solid #e6e6e6",
                      }}>
                      <Typography
                        sx={{
                          color: "#325240",
                          fontSize: "18px",
                          fontWeight: "bold",
                          marginLeft: "auto",
                          float: "right",
                        }} >
                        1 x ₹120
                      </Typography>
                    </td>
                  </tr>
              <tr class="cart_item">
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      float: "right",
                    }} >
                    Subtotal
                  </Typography>
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }} >
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "auto",
                      float: "right",
                    }} >
                     ₹120
                  </Typography>
                </td>
              </tr>
              <tr class="cart_item">
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }} >
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      float: "right",
                    }}  >
                    Discount( 3% )
                  </Typography>
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }}  >
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "auto",
                      float: "right",
                    }}  >
                  ₹ {(120 * 3) / 100} 
                  </Typography>
                </td>
              </tr>
              <tr class="cart_item">
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }}>
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      float: "right",
                    }} >
                    Total Amount
                  </Typography>
                </td>
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }} >
                  <Typography
                    sx={{
                      color: "#325240",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "auto",
                      float: "right",
                    }} >
                    ₹116.4
                  </Typography>
                </td>
              </tr>
              <tr class="cart_item">
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                    height:"15px"
                  }} ></td>
                <td
                  style={{
                    padding: "12px 20px",
                    border: "1px solid #e6e6e6",
                  }}>
                  <Button
                    sx={{
                      bgcolor: "#325240",
                      color: "#f9f9f9",
                      marginLeft: "auto",
                      float: "right",
                      pr: 3,
                      pl: 3,
                      border: "2px solid transparent",
                      "&:hover": {
                        color: "#325240",
                        bgcolor: "#f9f9f9",
                        border: "2px solid #325240",
                      },
                    }}>
                    place order
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
 }

        // <div style={{ position: "relative", backgroundColor: "lightgray" }}>
        //     <h3 style={{ marginBottom: "30px" }}>Your Order</h3>

        //         {data.map((postData) => {
        //             console.log(postData);
        //             return (
        //                 <Box sx={{ flexGrow: 1 ,margin:4,backgroundColor:"white"}}>
        //                 <Grid container spacing={2} >
        //                     <Grid item xs={8}>
        //                             <Typography variant="h5" sx={{ml:1}}>
        //                                 {postData.name} <ImCross size={10} /> {postData.stock}
        //                             </Typography>
        //                             <p style={{ color: "grey",marginLeft:"1"}}>vendor:</p>
        //                     </Grid>
        //                     <Grid item xs={4} >
        //                         <Typography variant='h6'>
        //                             ₹{postData.price}
        //                         </Typography>
        //                     </Grid>
        //                 </Grid>
        //                 </Box>
        //             )
        //         })}
        //         <div style={{ position: "relative", backgroundColor: "lightgray" }}>
        //         <Grid sx={{ display: "flex", m: 3 }}>
        //             <Grid item xs={8} sx={{ backgroundColor: "white" }}>
        //                 <Typography variant='h5' sx={{ m: 2 }}> SubTotal</Typography>
        //             </Grid>
        //             <Grid item xs={4} sx={{ backgroundColor: "white" }}>
        //                 <Typography variant='h5' sx={{ m: 2 }}> ₹</Typography>
        //             </Grid>
        //         </Grid>
        //         <Grid sx={{ display: "flex", m: 3 }}>
        //             <Grid item xs={8} sx={{ backgroundColor: "white", }}>
        //                 <Typography variant='h5' sx={{ m: 2 }}> Total</Typography>
        //             </Grid>
        //             <Grid item xs={4} sx={{ backgroundColor: "white" }}>
        //                 <Typography variant='h5' sx={{ m: 2 }}> ₹</Typography>
        //             </Grid>
        //         </Grid>    
        //         </div>
        // </div>
//     )

// }
