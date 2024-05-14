import React from 'react';
import './SearchResults.css';

function SearchResults({ data }) {
  return (
    <div id="searchResults">
      {data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        data.map((logEntry, index) => (
          <div className="log-entry" key={index}>
            <p><strong>Level:</strong> {logEntry.level}</p>
            <p><strong>Log String:</strong> {logEntry.log_string}</p>
            <p><strong>Timestamp:</strong> {logEntry.timestamp}</p>
            <p><strong>Source:</strong> {logEntry.metadata.source}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
