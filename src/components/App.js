import React, { useState, useEffect } from "react";
//import { Link, Route, Switch } from "react-router-dom";
import GetApiData from "../services/GetApiData";
import ls from "../services/local-storage";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import "../stylesheets/App.scss";

const App = () => {
  const usersLocalStorage = ls.get("users", []); //el segundo parámetro corresponde a defaultData
  const [users, setUsers] = useState(usersLocalStorage);
  //const [filterName, setFilterName] = useState(ls.get("filterName", ""));

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
        <img
          className="logo"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Logo Rick and Morty"
        ></img>

        <Filter />
        <CharacterList users={users} />
      </div>
    </>
  );
};

export default App;
