import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from 'react-router-dom';

function CountryInfo() {
  const { country } = useParams();
  console.log(country);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default CountryInfo;
