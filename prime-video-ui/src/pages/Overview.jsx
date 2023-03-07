import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Buttoncontrol from "../components/Buttoncontrol";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Overview() {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      <Header>
        <h1>Welcome to Prime Video</h1>
        <p>
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </p>
        <Buttoncontrol
          label="Sign in to join"
          onClick={() => navigate("/signin")}
        />
      </Header>
      <Footer />
    </Container>
  );
}
const Container = styled.div`

  @media screen and (max-width: 500px) {

  }
`;
