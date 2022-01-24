import * as React from "react";
import * as styles from "./HomePage.module.css";

const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          Home Page
          <br />
          <span className={styles.heading_accent}>
            Group 2 E-commerce Page Project
          </span>
        </h1>
      </main>
    </>
  );
};

export default IndexPage;
