import React, { useRef } from "react";

import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SongCard from "./SongCard";
const SimilarSongs = ({ sameGenreSongs}) => {
  console.log(sameGenreSongs)
  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 500;
  };
  const RightHandler = () => {
    ref.current.scrollLeft += 500;
  };
  return (
    <Div>
      <Button onClick={LeftHandler}>
        <KeyboardArrowLeftIcon />
      </Button>
      <ScrollMenuDiv ref={ref}>
        {sameGenreSongs.map((item, index) => (
        <ChildCard key={index} className="child">
            <SongCard song={item} flg={true} /> 
        </ChildCard>
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
  @media screen and (min-width: 426px) and (max-width: 768px) {
    gap: 1.5rem;
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
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 0.6rem;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    padding: 0.3rem;
    display: none;
  }
`;

const ChildCard = styled.div`
  /* Add your desired styles for the child cards */
  /* For example: */
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 6px;
`;

export default SimilarSongs;
