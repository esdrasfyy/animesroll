import { FaRegTimesCircle } from 'react-icons/fa';
import NavbarTop from '../NavbarTop';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useState e useEffect

function MenuResp({ closeModal }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const homeLogo = () => {
    navigate('/');
  };

  const toRandom = () => {
    navigate('/random');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [closeModal]);

  return (
    <div className={`menuResp ${isOpen ? 'open' : ''}`}>
      <div className="modalNav">
        <NavbarTop
          classe="navbarResp"
          home="Home"
          correios="Correios"
          random="Animes Aleatórios"
          gift="Presentes"
          menuColunm={true}
          homeLogo={homeLogo}
          toRandom={toRandom}
        />
        <div id="closeMenu" onClick={toggleMenu}>
          <FaRegTimesCircle />
        </div>
      </div>
    </div>
  );
}

export default MenuResp;
