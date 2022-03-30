import React, { useState } from 'react';
import {setCookie,getCookie} from "../components/Cookie"
const Cityname = () => {
    const [name, setName] = useState("");

    const onChange = (newName) => {
      setCookie("name", newName, 1);
    };
  return (
    <div>
    <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          onChange(e.target.value);
        }}
      />
      <h1>Hello {getCookie("name")}!</h1>
    </div>
  )
}

export default Cityname