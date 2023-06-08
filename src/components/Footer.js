import React from "react";
import styled from "styled-components";
import logo from "../assets/images/melodify-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Div>
      <div className="footer">
        <img src={logo} alt="logo" />
        <h2>Melodify</h2>
      </div>
      <div className="creator">
        {" "}
        Created by <a href="https://github.com/CVLGeneral">CVLGeneral</a>
      </div>
      <div className="foot">      
       
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff"/>
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
          </a>
        </li>
     </div>

     <p style={{color: "#fff"}}>Contact us: cvlgeneral@gmail.com</p>



    </Div>
  );
};
const Div = styled.div`

  background: #0e1118;
  display: flex;
  padding: 1.5rem;
  /*position: fixed;*/

  
  gap: 10.0rem;
  justify-content: space-around;
  align-items: center;

  left: 0;
  right: 0;
  bottom: 0;
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 70px;
      height: 70px;
    }
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
  }
  .creator {
    color: #fff;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: #ed215e;
    }
  }
  .foot{
    color: #000;
    display: flex;        
    justify-content: center; 
  
    align-items: center;     

  }

  .foot li {
    padding:10px; 
    color: #000;


  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1.2rem;
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .creator {
      color: #fff;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: #ed215e;
      }
    }
  }
`;
export default Footer;