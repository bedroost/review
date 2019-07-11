import React from 'react';

const Search = () => (
  <div className="searchContainer">

    <div className="spyglass">
      <i className="fas fa-search"></i>
    </div>

    <div className="searchInput">
      <input type="text" id="name" placeholder="Search reviews" />
    </div>

  </div>
);

export default Search;
