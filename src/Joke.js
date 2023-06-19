import React, { useState, useEffect } from "react";
import "./joke.css";
import nor from "./assets/norris.gif";

function Joke(props) {
  const [url, setUrl] = useState("https://api.chucknorris.io/jokes/random");
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState("");
  const [loading, setLoading] = useState(true);
  const cahngedisplay = async (url) => {
    setLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setDisplay(result.value);
      })
      .catch(() => {
        setDisplay("Inspecting mirrors is a job I could really see myself doing");
        cahngedisplay(url);
      });
  };
  useEffect(() => {
    cahngedisplay(url);
  }, []);
  useEffect(() => {
    if (category != "") {
      setUrl(`https://api.chucknorris.io/jokes/random?category=${category}`);
      cahngedisplay(url);
    }
  }, [category]);

  const changeurl = (cata) => {
    if (cata != "") {
      setCategory(cata);
      console.log(category);

      console.log(url);
    } else {
      setCategory("");
      setUrl("https://api.chucknorris.io/jokes/random");
      cahngedisplay(url);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="image-div"></div>
        <div className="text-box">
          {!loading && display}
          {!loading && !display && (
            <p>My mind is not working change category </p>
          )}{" "}
          {loading && <p>loading............! </p>}
        </div>
        <div className="buttons-box">
          <div>
            <select
              className="foo"
              name="cars"
              value={category}
              onChange={(e) => {
                changeurl(e.target.value);
              }}
              id="cars"
              form="carform"
            >
              <option value="">select category</option>
              {props.cat.map((i, a) => (
                <option key={a + 1} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => {
              cahngedisplay(url);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Joke;
