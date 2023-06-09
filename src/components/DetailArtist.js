import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchData, SongOptions } from "../utlis/FetchData";
import DetailArtist from "../components/DetailArtist";
import Loader from "../components/Loader";

const ArtistDetail = () => {
  const [artistDetail, setArtistsDetail] = useState({}); // State to store artist detail
  const { id } = useParams(); // Retrieve the ID parameter from the URL
  const [loaded, setLoaded] = useState(true); // State to track if the data is loaded

  useEffect(() => {
    // Fetch artist data based on the provided ID
    const fetchArtistsData = async () => {
      const artistDBURL = "http://localhost:9292";
      
      // Fetch artist detail data from the API
      const artistDetailData = await FetchData(
        `${artistDBURL}/artists/${id}`,
        SongOptions
      );
      
      // Update the state with the fetched artist detail data
      setArtistsDetail(artistDetailData);
    };

    // Call the fetchArtistsData function
    fetchArtistsData();
  }, [id]);

  useEffect(() => {
    // Set a timer to simulate loading for 4 seconds
    let timer = setTimeout(() => setLoaded(false), 4000);

    // Clean up the timer and reset the loaded state when the component unmounts or the ID changes
    return () => {
      setLoaded(true);
      clearTimeout(timer);
    };
  }, [id]);

  // Render the component JSX
  return (
    <div>
      {loaded ? (
        <Loader />
      ) : (
        <Box>
          <DetailArtist artistDetail={artistDetail} />
          <h3>Songs</h3>
          {artistDetail.songs && artistDetail.songs.length > 0 ? (
            <ul>
              {artistDetail.songs.map((song) => (
                <li key={song.id}>{song.title}</li>
              ))}
            </ul>
          ) : (
            <p>No songs available</p>
          )}
        </Box>
      )}
    </div>
  );
};

export default ArtistDetail;
