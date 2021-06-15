import React from "react";
import "../stylesheets/Character.scss";

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
    <article className="character__card">
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de ${props.user.name}`}
        title={`Foto de ${props.user.name}`}
      />
      <h4 className="card__title">Name: {props.user.name}</h4>
      <section className="card__description">
        <h5 className="card__description--1">Species: {props.user.species}</h5>
        <h5 className="card__description--2"> Status: {props.user.status}</h5>
      </section>
    </article>
  );
};

export default Character;
