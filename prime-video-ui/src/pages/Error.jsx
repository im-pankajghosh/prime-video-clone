import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttoncontrol from "../components/Buttoncontrol";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      <Header>
        <p>
          It's not here.
          <br />
          There is nothing at the web address you've entered. Let's find you a
          great video to watch instead.
        </p>
        <Buttoncontrol
          label="Go to Prime Video home"
          onClick={() => navigate("/")}
        />
      </Header>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  header {
    min-height: 70vh;
    background-color: var(--movie-list-bg-color);
    background-image: none;
    align-items: center;
    justify-content: center;
    .content {
      top: 50%;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      p {
        font-size: 1rem;
        font-weight: 500;
      }
      button {
        background-color: #414040;
        width: 250px;
        &:hover{
            background-color: #414040;
        }
      }
    }
  }
  footer {
    background-color: var(--movie-list-bg-color);
  }
`;
