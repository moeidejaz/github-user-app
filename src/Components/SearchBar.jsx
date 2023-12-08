import React, { useState } from "react";
import styles from "../styles/search.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.error}>Invalid Search!</div>
      <img src="/img/searchIcon.svg" alt="_search" />
      <input
        type="text"
        name="input"
        id="input"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Search Github username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
