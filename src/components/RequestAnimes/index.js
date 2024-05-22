import './index.css';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';
import CardEpi from '../CardEpi';
import { FaStream } from 'react-icons/fa';
import { SearchContext } from '../contexts/SearchContext';
import Loading from '../Loading';

function RequestAnimes() {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { search } = useContext(SearchContext);

  const getSearchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${search}&page[limit]=18&page[offset]=0`,
      );
      setAnimeData(res.data.data);
    } catch (error) {
      console.log('Erro na busca:', error);
      setAnimeData([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getSearchData();
  }, [getSearchData]);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className='rotule'>
            <h1 id="resultSearch">
              <span>
                <FaStream /> Resultados Relacionados à:
              </span>{' '}
              <span>{search}</span>{' '}
            </h1>
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
          </div>
        </div>
      )}
    </main>
  );
}

export default RequestAnimes;
