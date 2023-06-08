import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { FetchData, SongOptions } from "../utlis/FetchData";
import styled from "styled-components";
import SongCard from "../components/SongCard";

const Songs = ({ songs, songGenre, setSongs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const SongPerPage = 15;
  const indexOfLastSong = currentPage * SongPerPage;
  const indexOfFirstSong = indexOfLastSong - SongPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

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
  }, [songGenre, setSongs]);

  const updateSong = (updatedSong) => {
    // Update the song in the songs array
    const updatedSongs = songs.map((song) => {
      if (song.id === updatedSong.id) {
        return {
          ...song,
          title: updatedSong.title,
          image_path: updatedSong.image_path,
        };
      }
      return song;
    });

    setSongs(updatedSongs);
  };

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  return (
    <SongContainer id="song">
      <h2>Showing Song Results</h2>
      <div className="card">
        {currentSongs.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            updateSong={updateSong} // Pass the updateSong function as prop
            flg={false}
          />
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