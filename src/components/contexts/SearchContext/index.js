import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("one piece");
  const [dataSearch, setDataSearch] = useState([]) 
  const [animeData, setAnimeData] = useState([]);
  const [showAd, setShowAd] = useState(false)

  return (
    <SearchContext.Provider value={{ search, setSearch, animeData, setAnimeData, dataSearch, setDataSearch, showAd, setShowAd }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };