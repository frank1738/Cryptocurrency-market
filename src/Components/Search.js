import React from 'react';
import { filter } from './filter';
import { useDispatch } from 'react-redux/es/exports';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search-container">
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={(e) => filter(e, dispatch)}
      ></input>
    </div>
  );
};

export default Search;
