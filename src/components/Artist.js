import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Artist = ({ item, img, name,id}) => {
    console.log(img)
    return (

  
      <Link
      style={{ textDecoration: "none" }}
      className="artist_card"
      to={`/artist/${id}`}
      >
   

      <Card
        type="button"
        style={
          name === item
            ? {
                borderTop: "5px solid #000",
                borderBottom: "5px solid #000",
              }
            : { border: "5px solid #000 " }
        }
        onClick={() => {

          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <div className="image">
        <img src={img} alt="" loading="lazy" onError={(e) => (e.target.src = "https://i.pinimg.com/736x/a1/48/1f/a1481fea8ac71daa74ed99acf1f848ec.jpg")} />
        </div>
        <h2>{name}</h2>
      </Card>
       </Link>
  


    );
  };



  
  const Card = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    
    background-color: "#fafafa";
    width: 201.75px;
    height: 292.14px;
    justify-content: center;
    border-radius: 9px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &:hover {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    h2 {
      text-transform: capitalize;
    }
    .image {
      width: 80%;
  
      img {
        width: 100%;
        margin-top: 20px;

        border-radius: 9px;
  
      }
    }
    @media screen and (min-width: 520px) and (max-width: 768px) {
      width: 200px;
      height: 250px;
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      width: 170px;
      height: 250px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      &:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
    }
  `;
  
  export default Artist;
  

