import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./components/Home"



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SongDetail from "./components/SongDetail";
import NewSong from "./components/NewSong";
import ArtistCard from "./components/ArtistCard"
import ArtistDetail from "./components/ArtistDetail";





import { Routes,Route } from "react-router-dom";

import Loader from "./components/Loader";




const App = () => {
  const [loaded, setLoaded] = useState(true);


  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);



  return (
    <div>


      {loaded ? (
        <Loader />
      ) : (
        <Section>
          <Navbar />
          

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/song/:id`} element={<SongDetail />} />
          <Route path="/form" element={<NewSong/>} />
          <Route path="/artists" element={<ArtistCard/>} />
          <Route path={"/artist/:id"} element={<ArtistDetail/>} />





          </Routes>

          <Footer />

        </Section>
      )}
    </div>
  );
};

const Section = styled.section``;
export default App;
