import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const ContectUs = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));


      const CityName = [
        { label: "Mumbai" },
        { label: "Delhi" },
        { label: "Bangalore" },
        { label: "Hyderabad" },
        { label: "Ahmedabad" },
        { label: "Chennai" },
        { label: "Kolkata" },
        { label: "Surat" },
        { label: "Pune" },
        { label: "Jaipur" },
        { label: "Lucknow" },
        { label: "Kanpur" },
        { label: "Nagpur" },
        { label: "Indore" },
        { label: "Thane" },
        { label: "Bhopal" },
        { label: "Visakhapatnam" },
        { label: "Pimpri and Chinchwad" },
        { label: "Patna" },
        { label: "Vadodara" },
        { label: "Ghaziabad" },
        { label: "Ludhiana" },
        { label: "Agra" },
        { label: "Nashik" },
        { label: "Faridabad" },
        { label: "Meerut" },
        { label: "Rajkot" },
        { label: "Kalyan" },
        { label: "Vasai" },
        { label: "Varanasi" },
      ];

  return (
    <div>
    <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
  <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  )
}

export default ContectUs