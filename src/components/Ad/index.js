import { FaTimes } from 'react-icons/fa';
import logo from '../../images/adAnuncio.gif'
import './index.css'
function Ad({ showCloseAd }) {
  const adStyle = {
    width: '300px',
    padding: '20px 0px',
    minHeight: '250px',
    background: `url(${logo}) no-repeat `,
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    zIndex: 99999,
    opacity: 1,
    margin: 'auto auto auto auto',
    // Adicione outros estilos, como borda, sombra etc. conforme necessário
  };
 
  return (
    <div className='allWidth'>
      <div className='adContainer' >
        <div className='ad' style={adStyle}>
        <button onClick={ showCloseAd }>
          <FaTimes />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Ad;
