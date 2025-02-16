import React, { useState } from "react";
import Dropdown from "./Dropdown";
import FetchData from "./FetchData";

import './App.css';


const App = () => {
  const [dataType, setDataType] = useState("character"); 

  return (
    <div>
      <h1>Rick and Morty API</h1>
      <Dropdown setDataType={setDataType} />
      <FetchData dataType={dataType} />
    </div>
  );
};

export default App;
