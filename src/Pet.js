import React from "react";

const Pet = ({ name, animal, breed, location, id, images }) => {
  let hero = `https://pets-images.div-apis.com/pets/nano.jpg`;

  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
