import React, { useState } from "react";
import styled from "styled-components";

const SongCard = ({ song, index, updateSong }) => {
  const [deleted, setDeleted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [songName, setSongName] = useState(song.title);
  const [imageUrl, setImageUrl] = useState(song.image_path);

  let str;
  const length = song.title.length;

  // If the name is too long, truncate it and add ellipsis
  if (length > 29) {
    str = song.title.slice(0, 29);
    str = str.concat(`...`);
  } else {
    str = song.title;
  }

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

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSongNameChange = event => {
    setSongName(event.target.value);
  };

  const handleImageUrlChange = event => {
    setImageUrl(event.target.value);
  };

  const handleUpdate = event => {
    event.preventDefault(); // Prevent page reload

    const updatedSong = {
      id: song.id,
      title: songName,
      image_path: imageUrl,
    };

    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSong),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Optional: handle the response data

        // Update the song object in the parent component's state
        updateSong(data);
      })
      .catch(error => console.error(error));

    // Close the form after saving changes
    closeForm();
  };

  if (deleted) {
    return null; // Optional: hide the deleted song item from the UI
  }

  return (
    <>
      <div className="song_card">
        <SongCardDiv>
          <div className="image">
            <img src={song.image_path} alt={song.title} loading="lazy" />
          </div>
          <h3>{str}</h3>

          <div className="content">
          <button onClick={openForm} className="button-link">
              Update
            </button>
            <button onClick={handleDelete} className="button-link">
              Delete
            </button>

          </div>
        </SongCardDiv>
      </div>

      {showForm && (
        <FormOverlay>
          <FormContent>
            <form onSubmit={handleUpdate}>
              <label htmlFor="songName">Song Name:</label>
              <input
                type="text"
                id="songName"
                value={songName}
                onChange={handleSongNameChange}
              />

              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={handleImageUrlChange}
              />

              <button type="submit">Save</button>
              <button type="button" onClick={closeForm}>
                Cancel
              </button>
            </form>
          </FormContent>
        </FormOverlay>
      )}
    </>
  );
};




const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  /* Add other styles as needed */

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-weight: bold;
    }

    input {
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: #ed215e;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #e51b57;
      }
    }
  }
`;


const SongCardDiv = styled.div`
  padding: 2rem 1.2rem;
  width: 201.75px;
  height: 302.14px;
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
    a.button-link,button {
      /* Styles for the button-like appearance */
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #ed215e;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background-color: #e51b57;
      }
    }
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