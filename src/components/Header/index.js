import { useContext, useRef, useState } from 'react';
import logo from '../../images/logo.webp';
import Search from '../Search';
import './index.css';
import { FaUserPlus, FaSearch, FaRegTimesCircle, FaBars } from 'react-icons/fa';
import { SearchContext } from '../contexts/SearchContext';
import NavbarTop from '../NavbarTop';
import MenuResp from '../MenuResp';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const { setSearch } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  
  const handleSearchButtonClick = () => {
    setSearchVisible(!searchVisible);
  };
  const saveSearch = (e) => {
    e.preventDefault();
    setSearch(searchValue);
    inputRef.current.focus();
    handleSearchButtonClick();
    setSearchValue('');
    navigate('/search')
  };
  const closeOverlaySearch = () => {
    handleSearchButtonClick();
  };
  const homeLogo = () => {
    navigate('/')
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const toRandom = () => {
    navigate(`/random`)
  }
  return (
    <header>
      <div className="container">
        <div>
          <div onClick={homeLogo} className="home">
            <img src={logo} alt="logo animesROLL" />
          </div>
          <div id="menumobile">
            <div className={searchVisible ? 'search-overlay' : 'one'}>
              {searchVisible ? (
                <div className="SearchDiv">
                  <form onSubmit={saveSearch}>
                    <input
                      type="text"
                      className="SearchInput"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Pesquise seu anime :)"
                      ref={inputRef}
                    />
                    <button type="submit" className="SearchButton">
                      <FaSearch />
                    </button>
                  </form>
                  <button id="close" onClick={closeOverlaySearch}>
                    <FaRegTimesCircle />
                  </button>
                </div>
              ) : (
                <NavbarTop classe="navbartop" homeLogo={homeLogo} toRandom={toRandom}/>
              )}
            </div>
            <div className="two">
              <Search handleSearchButtonClick={handleSearchButtonClick} />
              <button id="register">
                <FaUserPlus /> CADASTRE-SE
              </button>
              <button onClick={handleMenuToggle} className="menuMobile">
                <FaBars />
              </button>
            </div>
          </div>
          {showMenu ? <MenuResp closeModal={handleMenuToggle} logoHome={homeLogo}toRandom={toRandom}/> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
