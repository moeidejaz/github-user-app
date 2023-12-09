import React, { useEffect, useState, useContext } from "react";
import { InputContext } from "../App";
import styles from "../styles/main.module.css";
import SearchBar from "./SearchBar";
import CountryLoading from "./LoadingScreen/Skeleton";

const Main = () => {
  const { username } = useContext(InputContext);

  const [user, setUser] = useState(null);
  const [userr, setUserr] = useState(null);

  //fetching the userdata with username
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    //using username as dependency && username from useContext
  }, [username]);

  //formating the blog link of user
  function formatBlogLink(link) {
    if (link.length <= 17) {
      return link;
    } else {
      let str = "";
      for (let i = 0; i <= 16; i++) {
        str += link[i];
      }
      return str + "...";
    }
  }

  //formating joining date to more readble format
  function formatJoinDate(date) {
    const monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let year = "";
    let month = "";
    let day = "";

    const ss = date.split("");

    for (let i = 0; i <= 9; i++) {
      if (i >= 0 && i <= 3) {
        year += ss[i];
      } else if (i >= 6 && i <= 6) {
        month += ss[i];
      } else if (i >= 8) {
        day += ss[i];
      }
    }

    const createdAt = `Joined ${day} ${monthName[month]} ${year}`;
    return createdAt;
  }

  //using these functions to return <a> or <p> depending on info, more interactive experience
  function returnTwitter(username) {
    if (username) {
      return (
        <a
          href={`https://twitter.com/${username}`}
          className={styles.twitter}
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
        <a href={link} className={styles.twitter} target="_blank">
          {formatBlogLink(link)}
        </a>
      );
    } else {
      return <p style={{ color: "#4b6a9b80" }}>Not Available</p>;
    }
  }

  return (
    <main>
      <SearchBar />
      {/* using ternary for data || skeleton and then simple data processes */}
      {user ? (
        <section className={styles.user_details}>
          {/* ROW ONE */}
          <img
            src={user.avatar_url}
            alt="profile photo"
            className={styles.avatar}
          />
          <div>
            <h1 className={styles.name}>{user.name}</h1>
            <a
              href={`https://github.com/${user.login}`}
              className={styles.username}
              target="_blank"
            >{`@${user.login}`}</a>
          </div>

          <p className={styles.joinDate}>{formatJoinDate(user.created_at)}</p>

          {/* ROW TWO */}
          <div className={styles.user_main}>
            <p>{user.bio ? user.bio : "This profile has no bio"}</p>
          </div>

          {/* ROW THREE */}
          <div className={styles.user_stats}>
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
          </div>

          <div className={styles.user_links}>
            <div className={styles.link}>
              <img src="/img/location.svg" alt="" />
              <p style={{ color: user.location ? "" : "#4b6a9b80" }}>
                {user.location ? user.location : "Not Available"}
              </p>
            </div>

            <div className={styles.link}>
              <img src="/img/twitter.svg" alt="" />
              {returnTwitter(user.twitter_username)}
            </div>

            <div className={styles.link}>
              <img src="/img/link.svg" alt="" />
              {returnBlog(user.blog)}
            </div>

            <div className={styles.link}>
              <img src="/img/org.svg" alt="" />
              <p style={{ color: user.company ? "" : "#4b6a9b80" }}>
                {user.company ? user.company : "Not Available"}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <CountryLoading />
      )}
    </main>
  );
};

export default Main;
