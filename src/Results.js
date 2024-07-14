import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <div>
            <Phonetic phonetic={props.results.phonetic} />
          </div>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
