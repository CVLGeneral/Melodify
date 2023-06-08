import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SongCard = ({ song, index }) => {
  const [deleted, setDeleted] = useState(false);

  let str;
  const length = song.title.length;

  // If the name is too long, truncate it and add ellipsis
  if (length > 29) {
    str = song.title.slice(0, 29);
    str = str.concat(`...`);
  } else {
    str = song.title;
  }

  console.log(song.artist);

  const handleDelete = event => {
    event.preventDefault(); // Prevent page reload

    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Optional: handle the response data
        setDeleted(true);
      })
      .catch(error => console.error(error));
  };

  if (deleted) {
    return null; // Optional: hide the deleted song item from the UI
  }

  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        className="song_card"
        to={`/song/${song.id}`}
      >
        <SongCardDiv>
          <div className="image">
            <img src={song.image_path} alt={song.title} loading="lazy" />
          </div>
          <h3>{str}</h3>

          <div className="content">
            <button onClick={handleDelete}>Delete</button>
          </div>
        </SongCardDiv>
      </Link>
    </>
  );
};


const SongCardDiv = styled.div`
  padding: 2rem 1.2rem;
  width: 201.75px;
  height: 292.14px;
  display: flex;
  flex-direction: column;
  
  gap: 0.1rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 128) 0px 3px 6px, rgba(0, 0, 0, 128) 0px 3px 6px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
      rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 80%;
    margin: auto auto;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    gap: 1.5rem;
    font-size: 1rem;
    .btn {
      padding: 1rem 2rem;
      border: none;
      background-color: #ed215e;
      text-transform: capitalize;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      color: #fff;
      font-size: 100%;
      font-weight: 500;
      &:hover {
        color: #ed215e;
        background-color: #fafafa;
      }
    }

    .btn2 {
      color: #ed215e;
      background-color: #fafafa;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      &:hover {
        background-color: #ed215e;
        color: #fff;
      }
    }
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    box-sizing: border-box;
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px,
        rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
    }
    .image {
      width: 90%;
      margin: auto auto;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.7rem 1rem;
        border-radius: 9px;
      }
    }
    h3 {
      word-break: word-break;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    width: 100%;
    height: max-content;
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
        border-radius: 9px;
      }
    }
  }
`;
// const
export default SongCard;