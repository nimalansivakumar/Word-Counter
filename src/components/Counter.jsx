import React from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
  const { words, letters, spaces ,characters } = props.count;

  return (
    <div className={styles.container}>
      <div className={styles.countBox}>
        <h3>Words</h3>
        <p>{words}</p>
      </div>
      <div className={styles.countBox}>
        <h3>Letters</h3>
        <p>{letters}</p>
      </div>
      <div className={styles.countBox}>
        <h3>Spaces</h3>
        <p>{spaces}</p>
      </div>
      <div className={styles.countBox}>
        <h3>Characters</h3>
        <p>{characters}</p>
      </div>
    </div>
  );
};

export default Counter;
