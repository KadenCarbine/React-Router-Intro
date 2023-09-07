import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <>
      <h1>Soda</h1>
      <img src="https://media3.giphy.com/media/l4FGr3nzq5u0m02vm/giphy.gif?cid=6c09b952uv3ti6ehtc7u9oyl9x3552i3sa4qia5tnzptez3c&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Gif"/>
      <h2><Link to="/">Go Back</Link></h2>
    </>
  );
};
export default Soda;
