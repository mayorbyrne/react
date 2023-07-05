"use client";
import styles from "./index.module.css";

export default function Page() {
  function handleClick() {
    console.log("Hello World");
    window.open("/about", "_self");
  }

  return (
    <div onClick={handleClick} className={styles.holder}>
      Hello World....
    </div>
  );
}
