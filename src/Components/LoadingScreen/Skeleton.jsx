import React from "react";
import { Skeleton } from "@mui/material";
import styles from "../../styles/main.module.css";
import styles1 from "./skeleton.module.css";

const SkeletonLoading = () => {
  return (
    <section className={styles.user_details}>
      {/* ROW ONE */}
      <Skeleton animation="wave" variant="circular" width={100} height={100} />

      <div className={styles1.m1}>
        <h1 className={styles.name}>
          <Skeleton animation="wave" variant="text" width={200} />
        </h1>
        <a href="#" className={styles.username} target="_blank">
          <Skeleton animation="wave" variant="text" width={100} />
        </a>
      </div>

      <p className={styles1.joinDate}>
        {/* <Skeleton animation="wave" variant="text" width={100} /> */}
      </p>

      {/* ROW TWO */}
      <div className={styles.bio}>
        <p>
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
          <Skeleton animation="wave" variant="text" />
        </p>
      </div>

      <div className={styles1.user_links}>
        <div className={styles1.link}>
          <p className={styles.location}>
            <Skeleton animation="wave" variant="text" width={200} />
          </p>
        </div>

        <div className={styles1.link}>
          <Skeleton animation="wave" variant="text" width={200} />
        </div>

        <div className={styles1.link}>
          <Skeleton animation="wave" variant="text" width={200} />
        </div>

        <div className={styles1.link}>
          <Skeleton animation="wave" variant="text" width={200} />
        </div>
      </div>
    </section>
  );
};

export default SkeletonLoading;
