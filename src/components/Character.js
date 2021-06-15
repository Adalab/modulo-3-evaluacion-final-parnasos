import React from "react";

const Character = (props) => {
  // const getGender = () => {
  //   if (props.user.gender === "female") {
  //     return "Mujer";
  //   } else if (props.user.gender === "male") {
  //     return "Hombre";
  //   } else {
  //     return "No binario";
  //   }
  // };

  return (
    <article className="card">
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de ${props.user.name}`}
        title={`Foto de ${props.user.name}`}
      />
      <h4 className="card__title">Name: {props.user.name}</h4>
      <h5 className="card__description">Species: {props.user.species}</h5>{" "}
      <h5> Status: {props.user.status}</h5>
    </article>
  );
};

export default Character;
