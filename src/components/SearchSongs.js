import React, {useState,useEffect} from "react";
import styled from "styled-components";
import HomeHorizontalScrollbar from "./HomeHorizontalScrollbar";
import { FetchData, SongOptions } from "../utlis/FetchData";



const SearchSongs = ({
  search,
  setSearch,
  setSongs,
  songGenre,
  setSongGenre,
}) => {
  const [songGenres, setSongGenres] = useState([]);

  useEffect(() => {
    // Fetch song genre data from the server
    const fetchSongData = async () => {
      const songGenreData = await FetchData(
        "http://localhost:9292/genres",
        SongOptions
      );
      setSongGenres(["all", ...songGenreData]);
    };

    fetchSongData();
  }, []);

  console.log(songGenres);

  const searchHandler = (e) => {
    // Update the search state with the user's input
    setSearch(e.target.value.toLowerCase());
  };

  const submitHandler = async () => {
    // Perform search functionality when the search button is clicked

    if (search) {
      const songsData = await FetchData(
        "http://localhost:9292/songs",
        SongOptions
      );

      // Filter the songs based on the search query
      const searchSongs = songsData.filter(
        (song) =>
          song.title.toLowerCase().includes(search) ||
          // song.artist.toLowerCase().includes(search) ||
          song.genre.toLowerCase().includes(search)
      );

      // Reset the search input and update the songs state with the search results
      setSearch("");
      setSongs(searchSongs);

      // Scroll to a specific position on the page
      window.scrollTo({
        top: 1700,
        left: 100,
        behavior: "smooth",
      });
    }
  };


    return (
      <Section id="search">
        <div className="container">
          <div className="heading">
            <h2 className="title">
              {" "}
              Awesome Songs you <br /> should Listen to{" "}
            </h2>
          </div>
          <div className="input">
            <input
              type="text"
              className="inputField"
              placeholder="Search Song..."
              value={search}
              onChange={searchHandler}
            />
            <Button onClick={submitHandler}>Search</Button>
          </div>
          <div id="ExploreSong" className="HomeHorizontalScrollbar">
            <HomeHorizontalScrollbar
              data={songGenres}
              // songGenres
              songGenre={songGenre}
              setSongGenre={setSongGenre}
            />
          </div>
        </div>
      </Section>
    );
  };
  
  const Section = styled.section`
    margin-top: 7rem;
    height: 100vh;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      .heading {
        h2 {
          font-size: 3.5rem;
          text-align: center;
          text-transform: capitalize;
        }
      }
      .input {
        display: flex;
        position: "relative";
        width: 70vw;
        justify-content: center;
        align-content: center;
        input {
          position: relative;
          left: 3rem;
          width: 70%;
          background-color: #191f2a;
          color: #fff;
          font-size: 1.7rem;
          padding: 0.5rem 7rem 0.5rem 1rem;
          border-radius: 7px;
          ::placeholder {
            color: #fff;
            opacity: 0.5;
          }
        }
      }
      .HomeHorizontalScrollbar {
        margin-top: 4rem;
        width: 90vw;
      }
    }
    @media screen and (min-width: 520px) and (max-width: 768px) {
      margin-top: 3.5rem;
      height: 100vh;
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        .heading {
          h2 {
            font-size: 2rem;
            text-align: center;
            text-transform: capitalize;
          }
        }
        .input {
          box-sizing: border-box;
          display: flex;
          position: "relative";
          flex-direction: column;
          gap: 1rem;
          width: 75vw;
          justify-content: center;
          input {
            left: 0px;
            width: 100%;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }
        }
        .HomeHorizontalScrollbar {
          margin-top: 2rem;
          width: 90vw;
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      margin-top: 2rem;
      .container {
        .heading {
          h2 {
            font-size: 1.5rem;
          }
        }
        .input {
          box-sizing: border-box;
          display: flex;
          position: "relative";
          flex-direction: column;
          gap: 1rem;
          width: 75vw;
          justify-content: center;
          input {
            left: 0px;
            width: 100%;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  `;
  
  const Button = styled.button`
    outline: none;
    padding: 0.5rem 1.2rem;
    background-color: #ed215e;
    border-radius: 7px;
    color: #fff;
    text-decoration: none;
    width: max-content;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.3rem;
    z-index: 10;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #ed215e;
    }
    @media screen and (min-width: 280px) and (max-width: 768px) {
      padding: 0.5rem 1rem;
      align-self: center;
      border: none;
      &:hover {
        border: 1px solid #000;
      }
    }
  `;
  export default SearchSongs;