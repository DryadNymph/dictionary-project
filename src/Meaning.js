import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <div className="definition">{props.meaning.definition}</div>

        <div className="example">{props.meaning.example}</div>

        <Synonyms synonyms={props.meaning.synonyms} />
        <strong>Synonyms:</strong>
        {props.meaning.synonyms}
      </p>
    </div>
  );
}
