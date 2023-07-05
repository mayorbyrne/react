"use client";
import styles from "./about.module.css";
import baseStyles from "../index.module.css";

export default function About() {
  const classNames = `${baseStyles.holder} ${styles.top}`;
  function handleClick() {
    window.open("/", "_self");
  }

  return (
    <div onClick={handleClick} className={classNames}>
      <h1>About</h1>
    </div>
  )
}
