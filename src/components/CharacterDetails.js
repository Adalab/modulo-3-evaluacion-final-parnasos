import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../stylesheets/characterDetail.scss";

const CharacterDetails = (props) => {
  return (
    <article className="character__detail">
      <Link to="/">Go back to the Homepage</Link>
      <img
        className="detail__img"
        src={props.user.image}
        alt={`Foto de ${props.user.name}`}
        title={`Foto de ${props.user.name}`}
      />
      <section className="card__description">
        <h4 className="card__title">Name: {props.user.name}</h4>
        <h5 className="card__description--1">Species: {props.user.species}</h5>
        <h5 className="card__description--2"> Status: {props.user.status}</h5>
        <h5 className="card__description--3"> Origin: {props.user.origin}</h5>
        <h5 className="card__description--4">
          Number of episodes: {props.user.episodes}
        </h5>
      </section>
    </article>
  );
};

export default CharacterDetails;
