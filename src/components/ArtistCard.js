import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Artist from "./Artist";


const ArtistCard = () => {
  const [artists, setArtists] = useState([]);
  console.log(artists)

  useEffect(() => {
    fetch(`http://localhost:9292/artists`)
      .then((response) => response.json())
      .then((data) => setArtists(data))
      .catch((error) => console.error(error));
  }, []);

  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 200;
  };

  const RightHandler = () => {
    ref.current.scrollLeft += 200;
  };

  return (
    <>

    <TitleDiv >
    <h2 className="title">Artists</h2>

    <Div>
      <Button onClick={LeftHandler}>
        <KeyboardArrowLeftIcon />
      </Button>
      <ScrollMenuDiv ref={ref}>
        {artists.map((item, index) => (
          <Scroll key={index} itemId={item.id || item.text} title={item.id || item.text}>
            {item.text}
            <Artist
            
            item={item.text}
            id={item.id}
            name={item.name}
            img={item.image_url}
            // setSongGenre={setSongGenre}
            // songGenre={songGenre}
          />
          </Scroll>
          
        ))}
      </ScrollMenuDiv>
      <Button onClick={RightHandler}>
        <KeyboardArrowRightIcon />
      </Button>
    </Div>
    </TitleDiv>
    

    </>
  );
};


const TitleDiv=styled.div`
.title{
    
font-size: 2.3rem;
    text-align: center;
    margin-bottom: 3rem;
    text-transform: capitalize;}
`;
const Div = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 8.5rem 0rem;

  @media screen and (min-width: 280px) and (max-width: 500px) {
    gap: 1rem;
  }
`;
const ScrollMenuDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Scroll = styled.div`
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: auto auto;
  border: none;
  padding: 1rem;
  color: #ed215e;
  border-radius: 50%;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  align-items: center;
  width: max-content;
  height: max-content;
  &:hover {
    box-shadow: rgba(20, 96, 229, 1) 0px 20px 30px -10px;
  }
  cursor: pointer;
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 0.6rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding: 0.3rem;
  }
`;

export default ArtistCard;