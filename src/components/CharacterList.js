import React from "react";
import Character from "./Character";
import CharacterDetails from "./CharacterDetails";
import "../stylesheets/CharacterList.scss";

const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return <Character key={user.id} user={user} />;
  });
  return (
    <section>
      <ul className="character__list">{userElements}</ul>
    </section>
  );
};

export default CharacterList;
