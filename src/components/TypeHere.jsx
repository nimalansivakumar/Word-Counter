import React from "react";
import styles from "./TypeHere.module.css";

const Typer = (props) => {
  //function to count words, letters , spaces and characters

  const Counter = (e) => {
    //initialize every time to 0
    let words = 0,
      letters = 0,
      spaces = 0,
      characters = 0;

    let typed = e.target.value;
    typed = typed.split(" ");

    // console.log(typed);

    for (var i = 0; i < typed.length; i++) {
      if (typed[i]) {
        words++;
        letters += countLetters(typed[i]);
        spaces = words - 1;
        characters = e.target.value.length;
      }
    }

    //pass as props to parent
    props.handler({ words, letters, spaces, characters });
  };

  //function to validate only letters (not symbols and special characters)
  const countLetters = (word) => {
    let letterCount = 0;

    for (var i = 0; i < word.length; i++) {
      let letterCode = word.charCodeAt(i);
      if (
        (letterCode > 64 && letterCode < 91) ||
        (letterCode > 96 && letterCode < 123)
      ) {
        letterCount++;
      }
    }
    return letterCount;
  };

  //copy the entered text
  const CopyText = () => {
    const textArea = document.getElementById("editor");
    textArea.select();
    document.execCommand("copy");
  };

  //tweet text in twitter
  const TweetText = () => {
    //  let href = `https://twitter.com/intent/tweet?text=${}`

    const tweetableText = document.getElementById("editor").value;

    if (tweetableText.length > 280) {
      alert("Characters should be less than 280");
    } else {
      document
        .querySelector(".twitter-share-button")
        .setAttribute(
          "href",
          "https://twitter.com/intent/tweet?text=" + tweetableText
        );
    }
  };

  //Reset or reloads the screen
  const ResetText = () => {
    const input = document.getElementById("editor");
    input.value = "";
    input.focus();
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <textarea
        id="editor"
        className={styles.textField}
        placeholder="✍🏼 Type something here"
        onChange={(e) => {
          Counter(e);
        }}
      ></textarea>
      <div className={styles.actionBar}>
        <button className={styles.tweetBtn}>
          <a
            className="twitter-share-button"
            style={{ color: "#fff", textDecoration: "none" }}
            onClick={TweetText}
          >
            Tweet
          </a>
        </button>
        <button className={styles.copyBtn} onClick={CopyText}>
          Copy
        </button>
        <button className={styles.resetBtn} onClick={ResetText}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Typer;
