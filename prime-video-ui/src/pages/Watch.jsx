import React from "react";
import styled from "styled-components";

export default function Watch() {
  return (
    <Container>
      <div className="player">
        <video
          src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/aa6b/9431/3dee/4abd-997d-bbe7101a55c0/8eac6d78-ca60-4de1-a200-95f325f23385_video_720p_4000kbps_audio_aaclc_128kbps.mp4"
          autoPlay
          controls
        />
      </div>
    </Container>
  );
}
const Container = styled.div`
  .player {
    position: absolute;
    display: flex;
    background-color: #000;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    height: 100%;
    box-sizing: border-box;
    align-items: center;
    video {
      object-fit: cover;
      width: 100%;
    }
  }

  @media screen and (min-width: 1023px) {
    .player {
      video {
        height: 100%;        
      }
    }
  }
`;
