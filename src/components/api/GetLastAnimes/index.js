import { useCallback, useContext, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import axios from 'axios';

const GetLastAnimes = () => {
  const [loading, setLoading] = useState(true);

  const { setAnimeData } = useContext(SearchContext);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://kitsu.io/api/edge/anime?sort=-startDate&page[limit]=18`,
      );
      setAnimeData(res.data.data);
    } catch (error) {
      console.log('Erro na busca:', error);
      setAnimeData([]);
    } finally {
      setLoading(false);
    }
  }, [setAnimeData]);

  return { loading, getData }; // Retorna loading e error juntamente com getData
};

export default GetLastAnimes;
