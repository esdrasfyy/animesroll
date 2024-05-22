import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import CardBanner from '../CardBanner';
import { FaDice, FaStream } from 'react-icons/fa';
import Loading from '../Loading';
import './index.css';

function RandomAnimes() {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRandomOffset = () => Math.floor(Math.random() * 5000);

  const getSearchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${getRandomOffset()}`,
      );
      setAnimeData(res.data.data);
    } catch (error) {
      console.log('Erro na busca:', error);
      setAnimeData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSearchData();
  }, [getSearchData]);

  return (
    <div id="containerRandom">
      {loading ? (
        <Loading />
      ) : (
        <div>
        <div><h1> <FaDice /> Animes Aleatórios</h1></div>
          <div className="listEpRandom">
            {animeData.map((anime) => (
              <CardBanner
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
                sinopse={anime.attributes.synopsis}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomAnimes;
