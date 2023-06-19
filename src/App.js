import React, { useState, useEffect } from "react";
import "./App.css";
import head from "./assets/asset 0.png";
import gif from "./assets/asset 2.gif";
import gitimage from "./assets/25231.png";
import twit from "./assets/asset 3.svg";
import Joke from "./Joke.js";

function App() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [catt, setCatt] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.chucknorris.io/jokes/categories")
        .then((res) => res.json())
        .then((result) => {
          setCatt(result);
        })
        .catch(() => {
          setCatt([]);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <header className="flex-box">
{/*         <img src={head} alt="This is CHUCK NORRIS IO" />
 */}        <br />
        <div className="footer-container">
          <p className="sence">
            <strong>Disclaimer:</strong> This page is only for people with sence
            of humor
          </p>
        </div>
      </header>
      <Joke cat={catt} />
      <footer>
        <div className="footer-container ">
          <img className="gif" src={gif} alt="Chuck Norris" />
          <hr />
          <p>
            This is a chucknorris joke generater page built using react by
            Mahantesh
          </p>
          <p>
            Connect with me <strong>:</strong>{" "}
          </p>
          <div className="connect-withme">
            <a href="" target="_blank">
              <img src={twit} alt="" />
            </a>
            <a href="https://github.com/Ran096" target="_blank">
              <img className="gitimg" src={gitimage} alt="" />
            </a>
          </div>
          <p>
            <strong>Disclaimer:</strong> <a href="https://www.world-quotes.com/">This page</a> is only for fun
          </p>

          <div className="connect-withme">
            <a href="https://www.linkedin.com/in/ranjeetpatel096/">Status</a>
            <a href="https://api.chucknorris.io/privacy">Privacy statement</a>
          </div>
        </div>
      </footer>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
