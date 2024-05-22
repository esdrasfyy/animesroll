import { useContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RequestAnimes from './components/RequestAnimes';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ad from './components/Ad';

import { SearchContext } from './components/contexts/SearchContext';
import RandomAnimes from './components/RandomAnimes';
import InfoAnime from './components/InfoAnime';
// Math.random()
function App() {
  const { showAd, setShowAd } = useContext(SearchContext);
  const toggleAd = () => {
    setShowAd(!showAd);
  };
  return (
    <BrowserRouter>
      <div className="App">
        {showAd && <Ad showCloseAd={toggleAd} />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RequestAnimes />} />
          <Route path="/random" element={<RandomAnimes />} />
          <Route path="/anime/:id" element={<InfoAnime />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
