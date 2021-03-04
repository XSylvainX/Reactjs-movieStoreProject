import React, { useState } from 'react';
import Axios from 'axios';
import Search from './components/search';
import Resultats from './components/resultats';
import Popup from './components/popup';


function App() {

  const [state, setState] = useState({

    s: "",
    results: [],
    selected: {}
  });



<<<<<<< HEAD
  const moviesurl = "https://www.omdbapi.com/?apikey=bdcbe34b";
=======
  const moviesurl = "http://www.omdbapi.com/?apikey=bdcbe34b";
>>>>>>> a941fc4... upload project

  const search = (e) => {
    if (e.key === "Enter") {
      Axios(moviesurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }


  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    Axios(moviesurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }


  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>The Movie store</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Resultats results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup=
          {closePopup} /> : false}

      </main>
    </div>
  );
}

export default App;
