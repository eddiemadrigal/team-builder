import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import "./Search.css";

// const characters = [
//     "Harry Potter",
//     "Luna Lovegood",
//     "Neville Longbottom",
//     "Hermione Granger",
//     "Ron Weasley",
//     "Ginny Weasley",
//     "Fred Weasley",
//     "George Weasley",
//     "Albus Dumbledore ",
//     "Aberforth Dumbledore ",
//     "Dudley Dursley ",
//     "Petunia Dursley ",
//     "Vernon Dursley",
//     "Cornelius Fudge",
//     "Rubeus Hagrid ",
//     "Viktor Krum ",
//     "Bellatrix Lestrange",
//     "Narcissa Malfoy",
//     "Draco Malfoy"
// ];

function SearchAPI() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        axios
            .get('http://hp-api.herokuapp.com/api/characters')
            .then(response => {
                const myData = [];
                response.data.map(({name}) => {
                    myData.push(name);
                });
                console.log(myData);
                const results = myData.filter(character => 
                    character.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(results);
            })
            .catch(error => {
                console.log('Error: ', error)
            }); 
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="App">
            <h1>Search Form
            </h1>
            <form>
                <label htmlFor="name">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={handleChange}/>
            </form>
            <div>
                <ul className="searchResults">
                    {searchResults.map(character => (
                        <li key={character}>{character}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<SearchAPI/>, document.getElementById('root'));

export default SearchAPI;
