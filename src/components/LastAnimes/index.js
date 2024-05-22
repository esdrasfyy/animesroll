import { FaBell, FaFireAlt, FaPlayCircle } from "react-icons/fa";
import CardEpi from "../CardEpi";

function LastAnimes({animeData}) {
  return ( 
    <>
    
    <div className="marquee">
        <div>
          <h1>
            <FaPlayCircle /> Últimos Lançamentos{' '}
          </h1>
        </div>
        <div className="bell">
          <FaBell />
        </div>
      </div>
      <div className="listEp">
        {animeData.map((anime) => (
          <CardEpi
            key={anime.id}
            id={anime.id}
            title={
              anime.attributes.canonicalTitle ||
              anime.attributes.canonicalTitle
            }
            imgEp={
              anime.attributes.posterImage.tiny ||
              'https://telhafer.com.br/image/no_image.jpg'
            }
            episodeo={anime.attributes.episodeCount}
          />
        ))}
        <div className="listNews">
          <button>
            <FaFireAlt /> Lista dos últimos 100 lançamentos
          </button>
        </div>
      </div>
    </>
   );
}

export default LastAnimes;