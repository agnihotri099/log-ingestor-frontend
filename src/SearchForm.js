import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    searchTerm: '',
    level: '',
    logString: '',
    timestamp: '',
    source: '',
    useRegex: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi")
    console.log(formData)
    onSearch(formData);
  };

  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        placeholder="Enter search term"
        value={formData.searchTerm}
        onChange={handleChange}
      />
      <select
        name="level"
        value={formData.level}
        onChange={handleChange}
      >
        <option value="">Select level</option>
        <option value="info">Info</option>
        <option value="error">Error</option>
        <option value="success">Success</option>
      </select>
      <input
        type="text"
        name="logString"
        placeholder="Enter log string"
        value={formData.logString}
        onChange={handleChange}
      />
      <input
        type="text"
        name="timestamp"
        placeholder="Enter timestamp"
        value={formData.timestamp}
        onChange={handleChange}
      />
      <input
        type="text"
        name="source"
        placeholder="Enter source"
        value={formData.source}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        id="useRegex"
        name="useRegex"
        checked={formData.useRegex}
        onChange={handleChange}
      />
      <label htmlFor="useRegex">Use Regular Expression</label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
