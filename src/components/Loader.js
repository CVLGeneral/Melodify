import React from "react";
import { AtomLoader } from "react-loaders-kit";
import styled from "styled-components";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ['#ed215e', '#ed215e'],
  };

  return (
    <LoaderDiv className="loader">
      <AtomLoader {...loaderProps} />
      <h2>Melodify</h2>
    </LoaderDiv>
  );
}


const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  h2 {
    color: #ed215e;
    font-size: 1.5rem;
  }
`;

export default Loader;