import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { FetchData, SongOptions } from "../utlis/FetchData";
import styled from "styled-components";
import SongCard from "../components/SongCard";
const Songs = ({ songs, songGenre, setSongs }) => {
   console.log(songs);
// Set initial state for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Set number of songs per page
  const SongPerPage = 15;
  // Calculate the index of the last song on the current page
  const indexOfLastSong = currentPage * SongPerPage;
  // Calculate the index of the first song on the current page
  const indexOfFirstSong = indexOfLastSong - SongPerPage;
  // Slice the songs array to only include songs for the current page
  const currentSongs = songs.slice(
    indexOfFirstSong,
    indexOfLastSong
  );
  

// Fetch song data from API when the song genre changes
  useEffect(() => {
    const fetchSongData = async () => {
      let SongData = [];
      if (songGenre === "all") {
        SongData = await FetchData(
          "http://localhost:9292/songs",
          SongOptions
        );
      } else {
        SongData = await FetchData(
          `http://localhost:9292/genres/${songGenre}/songs`,
          SongOptions
        );
      }
      setSongs(SongData);
    };
    fetchSongData();
  }, [songGenre,setSongs]);
// Function to handle pagination and scrolling to top of page
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  return (
    <SongContainer id="song">
      <h2>Showing Song Results</h2>
      <div className="card">
        {currentSongs.map((song, index) => (
          <SongCard key={index} song={song} flg={false} />
        ))}
      </div>

      <PaginationDiv>
        {songs.length > SongPerPage && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(songs.length / SongPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
            color="primary"
          />
        )}
      </PaginationDiv>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  margin: 4rem 3rem;
  h2 {
    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: capitalize;
  }
  .card {
    margin: auto auto;
    /* border: 1px solid red; */
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    gap: 3rem;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin: 2rem 1rem;
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 3rem;
      text-transform: capitalize;
    }
    .card {
      margin: auto auto;
      /* border: 1px solid red; */
      display: flex;
      width: 95%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    margin: 2rem 0;
    h2 {
      margin-top: 1rem;
      font-size: 1.3rem;
      text-align: center;
    }
    .card {
      display: flex;
      width: 85vw;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
  font-size: 1.3rem;
  @media screen and (min-width: 320px) and (max-width: 520px) {
    font-size: 0.2rem;
    margin: auto auto;
    margin-top: 3rem;
  }
`;

export default Songs;