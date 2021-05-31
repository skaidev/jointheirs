import React from "react";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
const Audiosermon = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="m-container audio py-5 poppins px-1 px-md-5 ">
        <h6 className="text-muted">February, 2020</h6>
        {audio?.map((audio) => (
          <div
            className="audio-details mb-3 text-truncate px-4 py-3"
            key={audio._id}
          >
            <div className="audio-txt mb-3">
              <i className="fas fa-microphone fa-2x text-warning"></i>
              <div className="audio-name">
                <span className="text-muted">Sermon By Pastor Eric</span>
                <h5 className="text-truncate">{audio.name}</h5>
              </div>
            </div>
            <AudioPlayer
              autoPlay={false}
              // loop
              src={`music/${audio.src}`}
              timeFormat="hh:mm:ss"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Audiosermon;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #e5e5e5;
  .audio {
    &-details {
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      .audio-txt {
        display: flex;
        gap: 2rem;
        align-items: center;
        .audio-name {
          word-wrap: break-word;
          flex: 1;
          position: relative;
        }
      }
      .rhap_container {
        box-shadow: none;
        padding: 0;
      }
    }
  }
`;

const audio = [
  {
    _id: 1,
    name: "Hillsong - Spirit lead me lyrics",
    src: "Hillsong - Spirit lead me lyrics.mp3",
  },
  {
    _id: 2,
    name: "cool sound",
    src: "cool sound.mp3",
  },
];
