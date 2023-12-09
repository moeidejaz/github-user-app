import React, { useState, useEffect, useContext } from "react";
import { InputContext } from "../App";
import styles from "../styles/search.module.css";

const SearchBar = () => {
  //getting the contextValues
  const { input, handleInput, handleSubmit } = useContext(InputContext);
  const [size, setSize] = useState("");

  //handle resize to change placeholder on certain width
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.error}>Invalid Search!</div>
      <img src="/img/searchIcon.svg" alt="_search" />
      <input
        type="text"
        name="input"
        id="input"
        value={input}
        onChange={handleInput}
        autoComplete="off"
        placeholder={size < 385 ? "Search Username" : "Search Github Username"}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
