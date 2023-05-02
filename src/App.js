import React from 'react';
import Character from './components/Character';
import { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data);
          setData(res.data);
      })
      .catch(err => console.err(err))
}, [])

  return (
    <div className="App">
      <h1 className="Header">List of Star Wars Characters</h1>
      {data.map((character) => ( 
        <Character character ={character}/>
      ))}
    </div>
  );
}

export default App;
