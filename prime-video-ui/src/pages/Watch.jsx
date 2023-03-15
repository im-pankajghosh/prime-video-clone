import React from "react";
import styled from "styled-components";

export default function Watch() {
  return (
    <Container>
      <div className="player">
        <video
          src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_sin/5457/a901/dd71/4b6c-8dec-ca1f7a4576ec/2da32488-50a6-4355-8386-d90fccec90e4_video_720p_4000kbps_audio_aaclc_128kbps.mp4"
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
