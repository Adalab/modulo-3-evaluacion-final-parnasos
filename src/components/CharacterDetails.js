import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import "../stylesheets/characterDetail.scss";

const CharacterDetails = (props) => {
  return (
    <>
      <article className="character__detail">
        <Link to="/">Go back to the Homepage</Link>
        <header>
          <img
            className="detail__img"
            src={props.user.image}
            alt={`Foto de ${props.user.name}`}
            title={`Foto de ${props.user.name}`}
          />
        </header>
        <section className="card__description">
          <h4 className="card__title">Name: {props.user.name}</h4>
          <ul className="card__details">
            <li className="card__details--1">Species: {props.user.species}</li>
            <li className="card__details--2"> Status: {props.user.status}</li>
            <li className="card__details--3"> Origin: {props.user.origin}</li>
            <li className="card__details--4">
              Number of episodes: {props.user.episodes}
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default CharacterDetails;
