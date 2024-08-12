// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const API_URL = 'https://swapi.dev/api/';

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInput = (input) => {
    setQuery(input);
  };

  const getStarships = async (searchTerm) => {
    const response = await fetch(`${API_URL}starships/?search=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    setStarshipsData(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getStarships('');
  }, []);

  return (
    <>
      <h1>Star Wars API Explorer</h1>
      <StarshipSearch 
        searchValue={query} 
        onSearchChange={handleSearchInput} 
        fetchStarships={getStarships} 
        toggleLoading={setIsLoading} 
      />
      <StarshipList starships={starshipsData} isLoading={isLoading} />
    </>
  );
}

export default App;
