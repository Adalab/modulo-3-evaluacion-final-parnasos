import React from "react";

const User = (props) => {
  const getGender = () => {
    if (props.user.gender === "female") {
      return "Mujer";
    } else if (props.user.gender === "male") {
      return "Hombre";
    } else {
      return "No binario";
    }
  };

  return (
    <article className="card">
      <img
        className="card__img"
        src={props.user.image}
        alt={`Foto de ${props.user.name}`}
        title={`Foto de ${props.user.name}`}
      />
      <h4 className="card__title">{props.user.name}</h4>
      <p className="card__description">
        {props.user.city} / {getGender()}
      </p>
    </article>
  );
};

export default User;
