import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchData, SongOptions } from "../utlis/FetchData";
import DetailArtist from "../components/DetailArtist";
import Loader from "../components/Loader";

const ArtistDetail = () => {
  const [artistDetail, setArtistsDetail] = useState({});
  const { id } = useParams();
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const fetchArtistsData = async () => {
      const artistDBURL = "http://localhost:9292";

      const artistDetailData = await FetchData(
        `${artistDBURL}/artists/${id}`,
        SongOptions
      );
      setArtistsDetail(artistDetailData);
    };
    fetchArtistsData();
  }, [id]);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      setLoaded(true);
      clearTimeout(timer);
    };
  }, [id]);

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
