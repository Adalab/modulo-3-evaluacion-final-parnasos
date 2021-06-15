import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

import GetApiData from "./services/GetApiData";
import ls from "./services/local-storage";

const App = () => {
  const usersLocalStorage = ls.get("users", []); //el segundo parámetro corresponde a defaultData
  const [users, setUsers] = useState(usersLocalStorage);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));

  useEffect(() => {
    if (users.length === 0) {
      GetApiData().then((userData) => {
        setUsers(userData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]); //guardo en en el array siempre que cambia users

  return (
    <>
      <div className="App">
        <h1 className="title">Rick and Morty</h1>
        <Filter />
        <UserList users={users} />
      </div>
    </>
  );
};

export default App;
