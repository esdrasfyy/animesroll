/* eslint-disable react-hooks/exhaustive-deps */

//https://kitsu.io/api/edge/anime?filter[text]=${search}&page[limit]=20


import './index.css';

import React, { useEffect,useContext } from 'react';


import { SearchContext } from '../contexts/SearchContext';
import GetLastAnimes from '../api/GetLastAnimes';

import LastAnimes from '../LastAnimes';
import Loading from '../Loading';

function Home() {

  let { animeData } = useContext(SearchContext);

  const { getData, loading} = GetLastAnimes();

  useEffect(() => {
    getData();
  }, []);

  console.log(animeData);

  return (
    <main>
      {loading ? <Loading/> : <LastAnimes animeData={animeData}/>}  
    </main>
  );
}

export default Home;
