import userEvent from "@testing-library/user-event";
import React from "react";
import User from "./User";

const UserList = (props) => {
  const userElements = props.users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};
