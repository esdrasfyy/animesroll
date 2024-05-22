import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading';
import { useParams } from 'react-router';
import GridAnimeInfo from '../GridAnimeInfo';

function InfoAnime() {
  const [loading, setLoading] = useState(true);
  const [animeData, setAnimeData] = useState([]);

  let { id } = useParams();

  const getAnimeData = useCallback(async () => {
    try {
      const res = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
      setAnimeData([res.data.data]);
      console.log(animeData)
    } catch (error) {
      console.log('Erro na busca:', error);
      setAnimeData([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAnimeData();
  }, [getAnimeData]);

  return (
    <main className="infosAnime">
      {loading ? (
        <Loading />
      ) : (
        <>
          {animeData.map((anime) => (
            <GridAnimeInfo key={anime.id} logo={anime.attributes.posterImage.tiny} synopse={anime.attributes.synopsis} title={anime.attributes.canonicalTitle} fav={anime.attributes.popularityRank
            } country={anime.attributes.youtubeVideoId} ano={anime.attributes.startDate} status={anime.attributes.status}
            next={anime.attributes.nextRelease}/>
          ))}
        </>
      )}
    </main>
  );
}

export default InfoAnime;
