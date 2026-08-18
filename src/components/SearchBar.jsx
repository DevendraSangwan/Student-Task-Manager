import { useRef } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef(null);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  return (
    <div className="search-container">
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="form-input"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="secondary-btn small-btn"
        >Clear</button>
      )}
    </div>
  );
};

export default SearchBar;