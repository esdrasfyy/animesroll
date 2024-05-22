import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';


function Search({ handleSearchButtonClick }) {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
    handleSearchButtonClick(); // Notifique o componente pai sobre o clique do botão de busca
  };

  return (
    <div className='search'>
      <button onClick={handleSearchClick}>
        <FaSearch className="logoSearch" />
      </button>
    </div>
  );
}

export default Search;