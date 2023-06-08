import React, {useState} from "react";
import HeroBanner from "../components/HeroBanner";
import SearchSongs from "../components/SearchSongs";
import Songs from "./Songs"

import styled from "styled-components";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [songGenre, setSongGenre] = useState("all");
  const [search, setSearch] = useState("");
  console.log(songs)


  return (
    <Div>
      <HeroBanner />
      <SearchSongs         
        search={search}
        setSearch={setSearch}
        setSongs={setSongs}
        songGenre={songGenre}
        setSongGenre={setSongGenre}/>

      <Songs
        search={search}
        setSongs={setSongs}
        songGenre={songGenre}
        songs={songs}
        
      />
      
      
      
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export default Home;