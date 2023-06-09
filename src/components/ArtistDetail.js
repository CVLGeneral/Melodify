import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// ArtistDetail component
const ArtistDetail = () => {
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
      <ArtistName>{artist.name}</ArtistName>
      <ArtistImage src={artist.image_url} alt="" loading="lazy" onError={(e) => (e.target.src = "https://i.pinimg.com/736x/a1/48/1f/a1481fea8ac71daa74ed99acf1f848ec.jpg")} />
      <SectionTitle>Songs</SectionTitle>
      {songs.length === 0 ? (
        <NoSongs>No songs available</NoSongs>
      ) : (
        <SongCardGrid>
          {songs.map(song => (
            <SongCard key={song.id}>
              <div className="image">
                <img src={song.image_path} alt={song.title} />
              </div>
              <div className="content">
                <h3>{song.title}</h3>

              </div>
            </SongCard>
          ))}
        </SongCardGrid>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;

  margin-left: 20px
`;

const Loading = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;

`;

const ArtistName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

`;

const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;


const SectionTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;

`;

const NoSongs = styled.p`
  font-size: 16px;
  text-align: center;

`;

const SongCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom:20px;
  margin-top:50px;

`;

const SongCard = styled.div`
  padding: 2rem 1rem;
  width: 201.75px;
  height: 292.14px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 128) 0px 3px 6px,
    rgba(0, 0, 0, 128) 0px 3px 6px;
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
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1rem;
    .btn-container {
      display: flex;
      justify-content: space-around;
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

export default ArtistDetail;
