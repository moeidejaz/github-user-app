import React from "react";
import styles from "../styles/main.module.css";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <main>
      <SearchBar />

      <section className={styles.user_details}>
        {/* ROW ONE */}
          <img
            src="https://avatars.githubusercontent.com/u/64331666?v=4"
            alt="profile photo"
          />
          <div>
            <h1 className={styles.name}>Abdul Moeid</h1>
            <a href="#" className={styles.username} target="_blank">@moeidejaz</a>
          </div>
          <p className={styles.joinDate}>Joined 26 Apr 2020</p>

        {/* ROW TWO */}
        <div className={styles.user_main}>
          <p>
            Self-taught React JS developer, constantly exploring, learning, and
            turning ideas into reality through code. 🚀
          </p>
        </div>

        {/* ROW THREE */}
        <div className={styles.user_stats}>
          <div className={styles.repos}>
            <h5>Repos</h5>
            <h2>33</h2>
          </div>
          <div className={styles.followers}>
            <h5>Followers</h5>
            <h2>2</h2>
          </div>
          <div className={styles.following}>
            <h5>Following</h5>
            <h2 className={styles.l}>1</h2>
          </div>
        </div>

        <div className={styles.user_links}>
          <div className={styles.link}>
            <img src="/img/location.svg" alt="" />
            <p>Earth</p>
          </div>

          <div className={styles.link}>
            <img src="/img/twitter.svg" alt="" />
            <p>moeidejaz</p>
          </div>

          <div className={styles.link}>
            <img src="/img/link.svg" alt="" />
            <p>https://moeidejaz.ne...</p>
          </div>

          <div className={styles.link}>
            <img src="/img/org.svg" alt="" />
            <p>Not Available</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
