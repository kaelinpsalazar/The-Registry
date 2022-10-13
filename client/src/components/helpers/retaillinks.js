import React from 'react';
import{ Link } from "react-router-dom";



function Retaillinks() {
  return (

    <div className="retaillinks">

      <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>

<Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>

<Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link>

    </div>
  );
}

export default Retaillinks;