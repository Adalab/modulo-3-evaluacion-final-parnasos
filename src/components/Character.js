import React from "react";
import "../stylesheets/Character.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Character = (props) => {
  return (
    <Link to={`/character/${props.user.id}`}>
      <article className="character__card">
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        />
        <h4 className="card__title">Name: {props.user.name}</h4>
        <section className="card__description">
          <h5 className="card__description--1">
            Species: {props.user.species}
          </h5>
          <h5 className="card__description--2"> Status: {props.user.status}</h5>
        </section>
      </article>
    </Link>
  );
};
Character.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    species: PropTypes.array,
    status: PropTypes.array,
  }),
};
export default Character;
