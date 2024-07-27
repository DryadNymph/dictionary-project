import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "6efd3f0da2o6441fbf2ft79c33ad8304";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let shecodesApiKey = "6efd3f0da2o6441fbf2ft79c33ad8304";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    let headers = { Authorization: `Bearer ${shecodesApiKey}` };
    axios
      .get(shecodesApiUrl, { headers: headers })
      .then(handleShecodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up? </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <div className="hint">
          suggested words: sunset, wine, yoga, forest, plants...
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
