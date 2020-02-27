import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import "./Search.css";

const characters = [
    "Harry Potter",
    "Luna Lovegood",
    "Neville Longbottom",
    "Hermione Granger",
    "Ron Weasley",
    "Ginny Weasley",
    "Fred Weasley",
    "George Weasley",
    "Albus Dumbledore ",
    "Aberforth Dumbledore ",
    "Dudley Dursley ",
    "Petunia Dursley ",
    "Vernon Dursley",
    "Cornelius Fudge",
    "Rubeus Hagrid ",
    "Viktor Krum ",
    "Bellatrix Lestrange",
    "Narcissa Malfoy",
    "Draco Malfoy"
  ];

function Search() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = characters.filter(character => 
            character.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

  return (
    <div className="App">
        <h1>Search Form </h1>
      <form>
          <label htmlFor="name">Search:</label>
          <input id="name" type="text" name="textfield" placeholder="Search ..." value={ searchTerm } onChange = { handleChange } />
      </form>
        <div>
            <ul className="searchResults">
                {searchResults.map(character => (
                    <li key={ character }>{ character }</li>
                ))}
            </ul>
        </div>
    </div>
  );
}

ReactDOM.render(<Search />, document.getElementById('root'));

export default Search;
