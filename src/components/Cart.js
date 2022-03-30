import React,{useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { BsBasketFill } from 'react-icons/bs';
// import { useTheme } from '@mui/material/styles';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ImCross } from 'react-icons/im';
import Button from "@material-ui/core/Button";
import { BsCurrencyPound } from 'react-icons/bs';
import data from "../products";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const onDelete = (cards) => {
    console.log("deleted",cards);

    // setCardcontent(cardContent.filter((e) => {
    //   return e!== cards;
    // }));
  }
  // let initCard;
  const buttonStyle = {
    backgroundColor: "green",
    color: "white", 
    width: "90%",
    margin: "5%"};
  //  const [cardContent, setCardcontent] = useState([initCard]);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // const theme = useTheme();

  const navbarStyle = {
    // margin: "20px",
    display: "flex",
  flex: "0.8",
  alignItems: "center",
  justifyContent: "space-around",
  boxSizing: "border-box",
  };

  const searchbar = {
    flex: "0.6",
   height: "5vh",
  }
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    window.location = `/products/${item.name}`;
  
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (

    <div >

    <div style={navbarStyle}>
    <div style={searchbar}>
      <ReactSearchAutocomplete
        items={data}
        maxResults={6}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        placeholder="Search for product, brands and more"
        onClear={handleOnClear}
        fuseOptions={{ keys: ["name", "categories","price"] }} // Search in the description text as well
        styling={{
          zIndex: 100,
          borderRadius: "5px",
          boxShadow: "none",
          border: "1px solid #e5e5e5",
          height: "5vh",
          placeholderFontSize: "2.5vh",
          fontSize: "2.2vh"
        }}
        className="search" // To display it on top of the search box below
      />
    </div>


      <Button style={{flex: "0.1",marginTop:"15px", position: "relative",display: "grid" ,float: "right" ,color: "green"}} aria-describedby={id} onClick={handleClick}>
        <h5> My Cart <BsBasketFill /></h5><p>1 item-<BsCurrencyPound />45.00</p>
      </Button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        anchorPosition={{
          right: '20%',
          top: '10%'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
      <div style={{width: '25rem'}}>
        <Typography sx={{ p: 2 }}><h3>Cart</h3></Typography>
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image="https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-background-picture-id624925456?s=612x612"
              alt="Live from space album cover"
            />
            <CardContent sx={{ flex: '1 0 auto', pl: 3 }}>
              <Typography component="div" variant="h5">
                Cabbage
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                1*<BsCurrencyPound />45.00
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, pb: 1, pl: 2 }}>
              <ImCross onClick={() => {onDelete()}}/>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image="https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-background-picture-id624925456?s=612x612"
              alt="Live from space album cover"
            />
            <CardContent sx={{ flex: '1 0 auto', pl: 3 }}>
              <Typography component="div" variant="h5">
                Cabbage
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                1*<BsCurrencyPound />45.00
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, pb: 1, pl: 2 }}>
              <ImCross onClick={() => {onDelete()}}/>
            </Box>
          </Box>
          <div style={{ padding: '5%', textAlign: "center" }}>
            <h5>SUBTOTAL:<BsCurrencyPound />45.00</h5>
          </div>
          <div>
            <Button style={buttonStyle} >
              View Cart
            </Button>
          </div>
          <div>
            <Button style={buttonStyle} >
              checkout
            </Button>
          </div>
        </Card>
        </div>
      </Popover>
    </div>
   
  );
}
