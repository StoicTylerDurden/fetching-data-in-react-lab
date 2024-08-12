// src/components/StarshipSearch.jsx
const StarshipSearch = ({ searchValue, onSearchChange, fetchStarships, toggleLoading }) => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        toggleLoading(true);
        fetchStarships(searchValue);
    };

    return (
        <>
            <h2>Search Starships</h2>
            <form onSubmit={handleFormSubmit}>
                <label><strong>Search:</strong></label>
                <input 
                    type="text" 
                    value={searchValue} 
                    onChange={(event) => onSearchChange(event.target.value)} 
                    required 
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default StarshipSearch;
