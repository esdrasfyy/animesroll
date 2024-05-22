import {
  FaCalendarAlt,
  FaCaretDown,
  FaDice,
  FaEnvelope,
  FaGift,
  FaHome,
  FaListUl,
  FaPlay,
  FaAlignLeft,
  FaFilm,
} from 'react-icons/fa';
import './index.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function NavbarTop({
  classe,
  home,
  correios,
  random,
  gift,
  homeLogo,
  toRandom,
  menuColunm,
}) {
  const { showAd, setShowAd } = useContext(SearchContext);
  const [showMenuRoll, setShowMenuRoll] = useState(false);
  const [showAnimesFilmes, setShowAnimesFilmes] = useState(false);
  const [showAnimesList, setShowAnimesList] = useState(false);

  const toggleAd = () => {
    setShowAd(!showAd);
  };

  const toggleMenuRoll = () => {
    setShowMenuRoll(!showMenuRoll);
  };

  const toggleAnimesFilmes = () => {
    setShowAnimesFilmes(!showAnimesFilmes);
  };

  const menuRollRef = useRef(null);
  const animesListRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRollRef.current &&
        !menuRollRef.current.contains(event.target)
      ) {
        setShowMenuRoll(false);
      }

      if (
        animesListRef.current &&
        !animesListRef.current.contains(event.target)
      ) {
        setShowAnimesFilmes(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const oiNe = () =>{
    alert("oi né rs")
  }
  return (
    <ul className={classe}>
      <li>
        <button onClick={homeLogo}>
          <FaHome />
          <p>{home ? home : ''}</p>
        </button>
      </li>
      <li>
        <button onClick={oiNe}>
          <FaEnvelope />
          <p>{correios ? correios : ''}</p>
        </button>
      </li>
      <li className="dropdownPai">
        <button onClick={toggleMenuRoll}>
          <FaListUl />
          MenuROLL
          <FaCaretDown />
        </button>
        {showMenuRoll && (
          <ul
            className={menuColunm ? 'menuColunm styled1' : 'dropdown styled1'}
            ref={menuRollRef}
          >
            <li>
              <div className="calendarLogo">
                <div>
                  <FaCalendarAlt className="aaa" />
                </div>
              </div>
              <div className="calendar">
                <p>CALENDÁRIO</p>
                <p className="clamp-lines">
                  Verifique novos episódios de cada anime em seus respectivos
                  dias de lançamento!
                </p>
              </div>
            </li>
            <li>
              <div className="notesLogo">
                <div>
                  <FaAlignLeft />
                </div>
              </div>
              <div className="notes">
                <p>NOTES</p>
                <p className="clamp-lines">
                  Correção de bugs, atualizações, novidades, eventos/promoções
                  e outros.
                </p>
              </div>
            </li>
            <li>
              <div className="pedidosLogo">
                <div>
                  <FaPlay />
                </div>
              </div>
              <div className="pedidos">
                <p>PEDIDOS</p>
                <p className="clamp-lines">
                  Faça sua lista com seus animes favoritos e mande nós
                  colarmos aqui no site! ;)
                </p>
              </div>
            </li>
          </ul>
        )}
      </li>
      <li className="dropdownPai">
        <button onClick={toggleAnimesFilmes}>
          <FaPlay />
          Animes/Filmes
          <FaCaretDown />
        </button>
        {showAnimesFilmes && (
          <ul
            className={menuColunm ? 'menuColunm styled2' : 'dropdown styled2'}
            ref={animesListRef}
          >
            <li>
              <div className="animesListLogo">
                <div>
                  <FaAlignLeft />
                </div>
              </div>
              <div className="animesList">
                <p>LISTA DE ANIMES</p>
                <p className="clamp-lines">Animes Legendados e Dublados</p>
              </div>
            </li>
            <li>
              <div className="filmesListLogo">
                <div>
                  <FaFilm />
                </div>
              </div>
              <div className="filmesList">
                <p>LISTA DE FILMES</p>
                <p className="clamp-lines">Filmes Legendados e Dublados</p>
              </div>
            </li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toRandom}>
          <FaDice />
          <p>{random ? random : ''}</p>
        </button>
      </li>
      <li>
        <button onClick={toggleAd}>
          <FaGift />
          <p>{gift ? gift : ''}</p>
        </button>
      </li>
    </ul>
  );
}