import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  FetchData,
  SongOptions,
} from "../utlis/FetchData";
import Detail from "../components/Detail";
import SimilarSongs from "../components/SimilarSongs";
import Loader from "../components/Loader";
const SongDetail = () => {
  const [songDetail, setSongsDetail] = useState({});
  const [sameGenreSongs, setSameGenreSongs] = useState([]);


  const { id } = useParams();
  const [loaded, setLoaded] = useState(true);

  
  // This useEffect hook fetches the song details
  
  useEffect(() => {
    const fetchSongsData = async () => {
      const songDBURL = "http://localhost:9292";


      const SongDetailData = await FetchData(
        `${songDBURL}/songs/${id}`,
        SongOptions
      );
      setSongsDetail(SongDetailData);
      console.log(SongDetailData)
      
      


      const sameGenreSongsData = await FetchData(
        `${songDBURL}/genres/${SongDetailData.genre}/songs`,
        SongOptions
      );
      setSameGenreSongs(sameGenreSongsData);



    };
    fetchSongsData();

    window.scrollTo(0, -250); //// Scrolls to the top of the page

  }, [id]);

  // The component returns the song details and related songs, as well as a loading spinner that is shown for 4 seconds when the page is loading.
// If the loaded state is false, the spinner is shown. Otherwise, the song details are displayed.

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
          <Detail songDetail={songDetail} />

          <SimilarSongs
            sameGenreSongs={sameGenreSongs}
          />
        </Box>
      )}
    </div>
  );
};

export default SongDetail;