import React from "react";
import Character from "./Character";
import { Link } from "react-router-dom";

import "../stylesheets/CharacterList.scss";

const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return (
      <li key={user.id}>
        <Character user={user} />
      </li>
    );
  });
  if (props.users.length === 0) {
    return (
      <>
        <p className="warning"> Unfinded character, sorry!</p>{" "}
      </>
    );
  } else {
    return (
      <section>
        <ul className="character__list">{userElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
