import '../styles/SearchBar.css';

function SearchBar({ value, onChange }) {
  
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="searchContainer">
      <div className="searchWrapper">
        <input
          type="text"
          className="searchInput"
          placeholder="Search by project name, description, or category..."
          value={value}
          onChange={handleInputChange}
          aria-label="Search projects"
        />
        {value && (
          <button
            className="clearButton"
            onClick={handleClear}
            aria-label="Clear search"
            title="Clear search"
          >
            remove
          </button>
        )}
        
      </div>
    </div>
  );
}

export default SearchBar;
