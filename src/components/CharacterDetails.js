import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../stylesheets/characterDetail.scss";

const CharacterDetails = (props) => {
  const makeDead = () => {
    if (props.user.status === "Dead") {
      return "fas fa-dizzy";
    } else if (props.user.status === "Alive") {
      return "fas fa-smile-wink";
    } else {
      return "fas fa-question-circle";
    }
  };
  return (
    <div className="character__container">
      <article className="character__detail">
        <img
          className="detail__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        />

        <section className="card__description">
          <h4 className="card__titleD">Name: {props.user.name}</h4>
          <ul className="card__details">
            <li className="card__details--item">
              Species: {props.user.species}
            </li>
            <li className="card__details--item ">
              Status: {props.user.status}
              <i class={`${makeDead()}`}></i>
            </li>
            <li className="card__details--item">Origin: {props.user.origin}</li>
            <li className="card__details--item">
              Number of episodes: {props.user.episodes}
            </li>
          </ul>
        </section>
      </article>
      <Link className="backToHomepage" to="/">
        Go back to the Homepage
      </Link>
    </div>
  );
};

export default CharacterDetails;
