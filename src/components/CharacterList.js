import React from "react";
import Character from "./Character";

const CharacterList = (props) => {
  const userElements = props.users.map((user) => {
    return <Character key={user.id} user={user} />;
  });
  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};

export default CharacterList;
