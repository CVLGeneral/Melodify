import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

// ArtistSong component
const ArtistSong = () => {
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch artist data based on the provided ID
    fetch(`http://localhost:9292/artists/${id}`)
      .then(response => response.json())
      .then(data => setArtist(data))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    // Fetch songs data for the artist
    if (artist) {
      fetch(`http://localhost:9292/artists/${id}/songs`)
        .then(response => response.json())
        .then(data => setSongs(data))
        .catch(error => console.error(error));
    }
  }, [artist, id]);

  if (!artist) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      {/* Display artist name */}
      <ArtistName>{artist.name}</ArtistName>
      {/* Display artist bio */}
      <Bio>{artist.bio}</Bio>
      {/* Display section title for songs */}
      <SectionTitle>Songs</SectionTitle>
      {songs.length === 0 ? (
        // If no songs available, display a message
        <NoSongs>No songs available</NoSongs>
      ) : (
        // If songs available, display the song list
        <SongList>
          {songs.map(song => (
            // Display each song item
            <SongItem key={song.id}>{song.title}</SongItem>
          ))}
        </SongList>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Loading = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ArtistName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const NoSongs = styled.p`
  font-size: 16px;
`;

const SongList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SongItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

export default ArtistSong;
