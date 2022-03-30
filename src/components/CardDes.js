import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BsCurrencyPound } from 'react-icons/bs';
import data from "../products";
import Button from '@mui/material/Button';
import { BsBasketFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { BiHeartCircle } from 'react-icons/bi';
const CardDes = () => {

  const hrcss = {
    color: '#D3D3D3	',
    backgroundColor: '#D3D3D3',
    height: .4,
    borderColor: '#D3D3D3',
    margin: '20px'
  }

  let { id } = useParams();
  // const addedToCart = data.addedToCart;
  return (
    <>
      <div>
        <h3>ID: {id}</h3>
      </div>
      <div style={{ position: "relative" }}>

        {data.map((postData) => {
          console.log(postData);
          return (
            <div>
              <a href="#" style={{
                color: "grey",
                paddingLeft: "20px",
                paddingBottom: "30px"
              }}> Home/ </a>
              <a href='/' style={{ color: "grey", paddingBottom: "30px" }}>{postData.name}</a>

              <div>
                <h1 style={{ paddingLeft: "20px" }}>{postData.name}</h1>
                <span style={{ paddingLeft: "20px", color: "grey" }}><FaRegEye />{" "}425 views</span>
                <hr style={hrcss} />
              </div>
              <div style={{ width: '100%' }}>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardMedia
                      component="img"
                      mx={{ width: 100, padding: 10 }}
                      image={postData.image}
                      alt="Live from space album cover"
                    />

                    <CardContent sx={{ pl: 3, flexDirection: 'column' }}>
                      <Typography variant="h5" >
                        The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat.
                        It is a large and muscular semi-longhair cat with a soft and silky coat.
                        Like all long haired cats, Ragdolls need grooming to ensure their fur does not mat.
                      </Typography>
                      <h3 style={{ color: "green", paddingTop: "10px" }}><BsCurrencyPound />{postData.price}</h3>
                      <hr style={hrcss} />
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={{ color: "grey" }}>{postData.stock} in stock</p>
                        <Button variant="contained" color="success"
                          startIcon={<BsBasketFill />} sx={{ color: "white",display: 'flex', flexDirection: 'row' }}>
                          Add to cart</Button>
                        <Avatar sx={{ bgcolor: green[800],display: 'flex', flexDirection: 'column' }}>
                          <BiHeartCircle size={30} />
                        </Avatar>
                      </div>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </>

  );
}

export default CardDes;