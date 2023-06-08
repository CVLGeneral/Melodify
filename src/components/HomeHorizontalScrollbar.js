import React, { useRef } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import All from "../assets/icons/all.png";
import Pop from "../assets/icons/pop.jpeg";
import Soul from "../assets/icons/electro.jpeg";
import Funk from "../assets/icons/film.jpeg";
import HipHop from "../assets/icons/hiphop.jpeg";
import Classical from "../assets/icons/classical.jpeg";
import Country from "../assets/icons/Acoustic.jpeg";
import Stage from "../assets/icons/class.jpeg";
import Rap from "../assets/icons/rap.jpeg";
import Gospel from "../assets/icons/gospel.jpeg";
import Dancehall from "../assets/icons/dancehall.jpeg";
import Latin from "../assets/icons/an.jpeg";
import Rock from "../assets/icons/amapiano.jpeg";





import SongGenre from "./SongGenre";


const HomeHorizontalScrollbar = ({ data,songGenre,setSongGenre }) => {
    const SongGenreImage = [
      {
        text: "1",
        img: All,
      },
      {
        text: "2",
        img: Pop,
      },
      {
        text: "3",
        img: Rock,
      },
      {
        text: "4",
        img: Latin,
      },
      {
        text: "5",
        img: Stage,
      },
      {
        text: "6",
        img: Funk,
      },
      {
        text: "7",
        img: Soul,
      },
      {
        text: "8",
        img: Classical,
      },
      {
        text: "9",
        img: Rap,
      },
      {
        text: "10",
        img: Country,
      },
      {
        text: "11",
        img: Gospel,
      },
      {
        text: "12",
        img: Dancehall,
      },
      {
        text: "13",
        img: HipHop,
      },
    ];
  
    if (data.length >= 13) {
        for (let i = 0; i < 13; i++) {
          if (SongGenreImage[i]) { // Check if the object exists
            SongGenreImage[i].text = data[i];
          }
        }
      }
  
    const ref = useRef(null);
  
    const LeftHandler = () => {
      ref.current.scrollLeft -= 200;
    };
  
    const RightHandler = () => {
      ref.current.scrollLeft += 200;
    };
    
  
    return (
      <Div>
        <Button onClick={LeftHandler}>
          <KeyboardArrowLeftIcon />
        </Button>
        <ScrollMenuDiv ref={ref}>
          {SongGenreImage.map((item, index) => (
            <Scroll 
            key={index} 
            itemId={item.id || item.text} 
            title={item.id || item.text}>
            
            <SongGenre
            
            item={item.text}
            img={item.img}
            setSongGenre={setSongGenre}
            songGenre={songGenre}
          />
            </Scroll>
          ))}
        </ScrollMenuDiv>
        <Button onClick={RightHandler}>
          <KeyboardArrowRightIcon />
        </Button>
      </Div>
    );
  };

const Div = styled.div`
  display: flex;
  gap: 2.5rem;
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

export default HomeHorizontalScrollbar;