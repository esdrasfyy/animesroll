import { useEffect } from 'react';
import './index.css';
function GridAnimeInfo({
  logo,
  title,
  synopse,
  fav,
  country,
  ano,
  status,
  next,
}) {
  const backStyle = {
    background: `url(${logo}) no-repeat`,
  };

  return (
    <>
      <div className="dispFlex">
        <div className="leftSide">
          <div className="logoLeftSide" style={backStyle}></div>
          <div className="titleLeftSide clamp-line" >
            <h1>{title}</h1>
          </div>
          <div className="informationBlock">
            <div>
              <p>
                Popularidade: # <b>{fav}</b>
              </p>
              <p>
                Lançamento: <b>{ano}</b>
              </p>
              <p>
                status: <b>{status}</b>
              </p>

              {country && (
                <p>
                 <a href={`https://www.youtube.com/watch?v=${country}`}><b> Trailler</b></a>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="rigthSide">
          <div className="allInfos">
            <h1>DESCRIÇÃO</h1>
            <p>{synopse}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridAnimeInfo;
