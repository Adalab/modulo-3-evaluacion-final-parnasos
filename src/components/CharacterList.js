import React from "react";
import Character from "./Character";

const CharacterList = (props) => {
  const nameList = props.users;
  nameList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

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
        <div className="warning__container">
          <p className="warning__text"> Damn! Character not found, sorry.</p>
        </div>
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
