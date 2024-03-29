import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <input
        placeholder="Enter a song, album or artist..."
        onChange={handleTermChange}
      />
      <button className={styles.SearchButton} onClick={passTerm}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

/* const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [addedTracks, setAddedTracks] = useState([]);

  const handleSearch = () => {
    const results = Tracks.filter((track) =>
      track.name.toLowerCase().includes(searchText)
    );
    setSearchResults(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleAddTrack = (track) => {
    if (!addedTracks.some((addedTrack) => addedTrack.id === track.id)) {
      setAddedTracks([...addedTracks, track]);
    }
  };

  const handleRemoveTrack = (trackId) => {
    setAddedTracks(
      addedTracks.filter((addedTrack) => addedTrack.id !== trackId)
    );
    
  };

  const clearPlaylist = () => {
    setAddedTracks([]);
  };


  return (
    <div className={styles.SearchBar}>
      <p>Enter your search below:</p>
      <input
        placeholder="Search for a song name..."
        id="input"
        type="text"        
        className="search"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className={styles.SearchButton}>Search</button>
      {searchResults.length > 0 ? (
        <>
          <p>{searchResults.length} results found:</p>
          <ul className="list">
            {searchResults.map((track) => (
              <div className="result">
                <li key={track.id} className="listItem">
                  {" "}
                  <b>{track.name}</b> <br></br> {` ` + track.artist}
                  <br style={{ marginBottom: "128px" }} />
                  <button onClick={() => handleAddTrack(track)}>Add</button>
                  <hr></hr>
                </li>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <p>No search results found for {searchText}.</p>
      )}

      {addedTracks.length > 0 && (
        <>
          <p>Playlist contains {addedTracks.length} tracks: <button onClick={clearPlaylist}>Clear playlist</button></p>
          <ul className="addedList">
            {addedTracks.map((addedTrack) => (
              <li key={addedTrack.id}>
                <b>{`${addedTrack.name}`}</b><br></br>{`${addedTrack.artist}`}{" "}
                <br></br>
                <button onClick={() => handleRemoveTrack(addedTrack.id)}>
                  Remove
                </button>
                <hr></hr>
              </li>
              
            ))}
          </ul>
          
        </>
      )}
    </div>
  );
}; */

// var clientID = "2928f694248c4e9ba046241a97bc46ed";
// var clientSecret = "243776c519cf4559adb98d1e2cf94d8b"
// const REDIRECT_URI = 'http://localhost:3000/';

/* import React from "react";

function SearchBar () {
    return (
        <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton" >
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar; */
