
import './index.css';
import { useNavigate } from 'react-router-dom';
function CardEpi({ imgEp, title, episodeo, id }) {
  const cardStyle = {
    width: '130px',
    minHeight: '74px',
    background: `url(${imgEp}) no-repeat `,
    backgroundSize: 'cover',
  };
  const navigate = useNavigate()
  const showInfoAnimes = () =>{
    navigate(`/anime/${id}`)
  }
  return (
    <div className="CardEp" id={id}>
      <div className="imageEp" style={cardStyle}>
        <div className="labelsColumn">
          <span className="language cube">LEG</span>{' '}
          <span className="resolution cube">HD</span>
        </div>
      </div>
      <h1 className="titleEp" alt={title}>
        {title}...
      </h1>
      <div className="episode">
        <button onClick={showInfoAnimes}>VER MAIS</button>
      </div>
    </div>
  );
}

export default CardEpi;
