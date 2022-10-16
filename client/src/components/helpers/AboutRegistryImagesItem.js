import React from 'react'

function AboutRegistryImagesItem({ image, name }) {
  return (
    <div className="aboutRegistryImagesItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
     <h1> { name } </h1>
      
    </div>
  );
}

export default AboutRegistryImagesItem;