import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function NewSong({ artistId, onAddSong }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [image_path, setImagePath] = useState('');
  const [artists, setArtists] = useState([]);
  const [selectedArtistId, setSelectedArtistId] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then(response => response.json())
      .then(data => setArtists(data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSong = {
      title: title,
      genre: genre,
      description: description,
      release_date: release_date,
      image_path: image_path,
      artist_id: selectedArtistId
    };
    

    fetch('http://localhost:9292/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    })
      .then(response => response.json())
      .then(data => onAddSong(data))
      .catch(error => console.error(error));

    setTitle('');
    setGenre('');
    setDescription('');
    setReleaseDate('');
    setImagePath('');
    setSelectedArtistId('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Artist:
        <select value={selectedArtistId} onChange={(event) => setSelectedArtistId(event.target.value)}>
          <option value="">Select an artist</option>
          {artists.map(artist => (
            <option key={artist.id} value={artist.id}>{artist.name}</option>
          ))}
        </select>
      </InputContainer>
      <InputContainer>
        Genre:
        <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Release Date:
        <input type="text" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
      </InputContainer>
      <InputContainer>
        Image URL:
        <input type="text" value={image_path} onChange={(event) => setImagePath(event.target.value)} />
      </InputContainer>
      <SubmitButton type="submit">Add Song</SubmitButton>
    </FormContainer>
  );
}

// Rest of the code remains the same

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:150px;
  margin-bottom: 205px;

`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 20px;
  }
  select {
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 18px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ed215e;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default NewSong;