import React, { useEffect, useState, useContext } from "react";
import { InputContext } from "../App";
import styles from "../styles/main.module.css";

import { SearchBar , formatStrings , formatJoinDate , Skeleton} from "../../NamedExports.js";

const Main = () => {
  const { username , setError } = useContext(InputContext);

  const [user, setUser] = useState(null);

  //fetching the userdata with username
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        const userData = await response.json();
        userData?.message ? setError(true) : setUser(userData)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    //using username as dependency && username from useContext
  }, [username]);

  //using these functions to return <a> or <p> depending on info, more interactive experience
  function returnTwitter(username) {
    if (username) {
      return (
        <a
          href={`https://twitter.com/${username}`}
          className={styles.twitterLink}
          target="_blank"
        >
          {username}
        </a>
      );
    } else {
      return <p style={{ color: "#4b6a9b80" }}>Not Available</p>;
    }
  }

  function returnBlog(link) {
    if (link) {
      return (
        <a href={link.includes("http") ? link : "https://" + link} className={styles.blogLink} target="_blank">
          {formatStrings(link)}
        </a>
      );
    } else {
      return <p style={{ color: "#4b6a9b80" }}>Not Available</p>;
    }
  }

  return (
    <main>
      <SearchBar />
      {/* using ternary to show skeleton untill data is fetched*/}
      {user ? (
        <section className={styles.user_details}>
          {/* ROW ONE */}
          <img
            src={user.avatar_url}
            alt="profile photo"
            className={styles.avatar}
          />
          <section>
            <h1 className={styles.name}>{user.name}</h1>
            <a
              href={`https://github.com/${user.login}`}
              className={styles.username}
              target="_blank"
            >{`@${user.login}`}</a>
          </section>

          <p className={styles.joinDate}>{formatJoinDate(user.created_at)}</p>

          {/* ROW TWO */}
          <p className={styles.bio}>
            {user.bio ? user.bio : "This profile has no bio"}
          </p>

          {/* ROW THREE */}
          <section className={styles.user_stats}>
            <div className={styles.repos}>
              <h5>Repos</h5>
              <h2>{user.public_repos}</h2>
            </div>
            <div className={styles.followers}>
              <h5>Followers</h5>
              <h2>{user.followers}</h2>
            </div>
            <div className={styles.following}>
              <h5>Following</h5>
              <h2>{user.following}</h2>
            </div>
          </section>

          <section className={styles.user_links}>
            <div className={styles.link}>
              <div
                className={styles.locationSVG}
                style={{
                  backgroundColor: user.location
                    ? ""
                    : "rgba(75, 106, 155, 0.5)",
                }}
              />
              <p style={{ color: user.location ? "" : "#4b6a9b80" }}>
                {user.location ? user.location : "Not Available"}
              </p>
            </div>

            <div className={styles.link}>
              <div
                className={styles.twitterSVG}
                style={{
                  backgroundColor: user.twitter_username
                    ? ""
                    : "rgba(75, 106, 155, 0.5)",
                }}
              />
              {returnTwitter(user.twitter_username)}
            </div>

            <div className={styles.link}>
              <div
                className={styles.linkSVG}
                style={{
                  backgroundColor: user.blog ? "" : "rgba(75, 106, 155, 0.5)",
                }}
              />
              {returnBlog(user.blog)}
            </div>

            <div className={styles.link}>
              <div
                className={styles.orgSVG}
                style={{
                  backgroundColor: user.company
                    ? ""
                    : "rgba(75, 106, 155, 0.5)",
                }}
              />
              <p style={{ color: user.company ? "" : "#4b6a9b80" }}>
                {user.company ? formatStrings(user.company) : "Not Available"}
              </p>
            </div>
          </section>
        </section>
      ) : (
        <Skeleton />
      )}
    </main>
  );
};

export default Main;
