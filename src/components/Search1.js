import * as React from 'react';
import TextField from '@mui/material/TextField';
import city2 from '../images/city3.webp';
import Autocomplete from '@mui/material/Autocomplete';

const selectStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderColor: "black"
}

export default function Search1() {
  return (
    <div style={{ position: "relative", }}>
      <img src={city2} style={{
        height: "700px", width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      </img>
      <div style={{
        position: "absolute",
        textAlign: "center",
        top: "40%",
        left: "50%",
        transform: "translate(-40%, -50%)",
        color: "black"
      }}>
        <h5>Online services in this portal are available only for the States listed below.</h5>
        <h5 style={{ color: "green" }}>Please select the City from where the service is to be taken</h5></div>
      <Autocomplete
        style={selectStyle}
        disablePortal
        id="combo-box-demo"
        options={CityName}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="---Select City Name---" />}
      />
    </div>

  );
}
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