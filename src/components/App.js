import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
// services
import GetApiData from "../services/GetApiData";
import ls from "../services/local-storage";
//components
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import CharacterDetails from "./CharacterDetails";
//style
import "../stylesheets/App.scss";

const App = () => {
  const usersLocalStorage = ls.get("users", []); //el segundo parámetro corresponde a defaultData
  const [users, setUsers] = useState(usersLocalStorage);
  const [filterName, setFilterName] = useState(ls.get("filterName", "")); //string vacío hace que nos muestre todos los personajes.

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

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      console.log(data.value);
      setFilterName(data.value);
    }
  };
  // render
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(filterName.toLowerCase());
  });
  // .filter(user => {
  //   if (filterGender === '') {
  //     return true;
  //   } else {
  //     return user.gender === filterGender;
  //   }
  //   // return filterGender === '' ? true : user.gender === filterGender
  //});

  //console.log(filteredUsers);
  //console.log("State filterName:", filterName);

  const renderCharacterDetail = (props) => {
    const routeChId = parseInt(props.match.params.userId);
    const foundCharacter = users.find((user) => {
      return user.id === routeChId;
    });
    console.log("Router props", props.match.params.userId);
    if (foundCharacter !== undefined) {
      return <CharacterDetails user={foundCharacter} />;
    } else {
      return (
        <>
          <p> Unfinded character, sorry!</p>
          <Link className="backToHomepage" to="/">
            Go back to the Homepage
          </Link>
        </>
      );
    }
  };
  return (
    <>
      <div className="App">
        <img
          className="logo"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Logo Rick and Morty"
        ></img>

        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} filterName={filterName} />
            <CharacterList users={filteredUsers} />
          </Route>
          <Route path="/character/:userId" render={renderCharacterDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
