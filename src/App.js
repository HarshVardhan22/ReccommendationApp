import React, { useState } from "react";
import styles from "./App.module.css";
import data from "./data";
// import { GrYoutube } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const App = () => {
  const [index, setIndex] = useState(0);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const handleClick1 = () => {
    setIndex(0);
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  };
  const handleClick2 = () => {
    setIndex(1);
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
  };
  const handleClick3 = () => {
    setIndex(2);
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.text}>
        <Fade top>
          <h1>Want to be a</h1>
          <h3 style={{ fontSize: "78px", color: "crimson" }}>Software Dev?</h3>
          <h2>Kick Start with</h2>
          <h1>
            {" "}
            <span style={{ fontSize: "50px", color: "crimson" }}>
              Recommendation{" "}
            </span>
            App
          </h1>
        </Fade>
      </div>

      <div className={styles.container}>
        <div className={styles.buttonRow}>
          <Fade left>
            <button
              style={{
                color: `${btn1 ? "#1f1f1f" : "whitesmoke"}`,
                background: `${btn1 ? "#3fe878" : "#221e1c"}`,
                boxShadow: `${
                  btn1
                    ? "inset 5px 5px 7px #32ba60,inset -5px -5px 7px #4cff90"
                    : " 5px 5px 7px #94989a,-5px -5px 7px #ffffff"
                }`,
              }}
              onClick={handleClick1}
            >
              Competitve Programming
            </button>
            <button
              style={{
                color: `${btn2 ? "#1f1f1f" : "whitesmoke"}`,
                background: `${btn2 ? "#3fe878" : "#221e1c"}`,
                boxShadow: `${
                  btn2
                    ? "inset 5px 5px 7px #32ba60,inset -5px -5px 7px #4cff90"
                    : " 5px 5px 7px #94989a,-5px -5px 7px #ffffff"
                }`,
              }}
              onClick={handleClick2}
            >
              Web Developement
            </button>
            <button
              style={{
                color: `${btn3 ? "#1f1f1f" : "whitesmoke"}`,
                background: `${btn3 ? "#3fe878" : "#221e1c"}`,
                boxShadow: `${
                  btn3
                    ? "inset 5px 5px 7px #32ba60,inset -5px -5px 7px #4cff90"
                    : " 5px 5px 7px #94989a,-5px -5px 7px #ffffff"
                }`,
              }}
              onClick={handleClick3}
            >
              Career Guidance
            </button>
          </Fade>
        </div>
        <div className={styles.miniCont}>
          {data[`${index}`].map((item, key) => {
            return (
              <Fade right>
                <div className={styles.card}>
                  <h2>{item.title}</h2>
                  <div className={styles.link}>
                    <FaStar  />
                    <h3>{item.rating}</h3>
                    <button className={styles.goto}>
                      <a href={item.link}>Link</a>
                    </button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
