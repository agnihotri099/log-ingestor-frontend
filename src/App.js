// App.js

import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (formData) => {
    // Make a POST request to the search route with formData
    console.log("yaha dekho");
    fetch(`https://log-ingestor-lkc8.onrender.com/search`, { // Change the URL to match your backend server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Log Search Interface</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults data={searchResults} />
    </div>
  );
}

export default App;
