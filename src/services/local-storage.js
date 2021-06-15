//import React from "react";

const get = (key, defaultData) => {
  localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const LsToExport = {
  get: get,
  set: set,
};

export default LsToExport;
