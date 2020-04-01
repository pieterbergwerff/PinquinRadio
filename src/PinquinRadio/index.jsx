import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePinquinRadio } from "./hooks";
import { PlayPause, PlayIcon, PauseIcon } from "./components";
import "./style";

const VolumeRangeStyle = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
    background: ${props => props.color1 || "#3071a9"};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
    border: 1px solid ${props => props.color2 || "#000"};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${props => props.color1 || "#fff"};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  :focus::-webkit-slider-runnable-track {
    ${"" /* background: #367ebd; */}
  }
  ::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
    background: ${props => props.color1 || "#3071a9"};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
    border: 1px solid ${props => props.color2 || "#000"};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${props => props.color1 || "#fff"};
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
  }
  ::-ms-fill-upper {
    background: ${props => props.color1 || "#3071a9"};
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px ${props => props.color2 || "#000"},
      0px 0px 1px #0d0d0d;
    border: 1px solid ${props => props.color2 || "#000"};
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${props => props.color1 || "#fff"};
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: ${props => props.color1 || "#3071a9"};
  }
  :focus::-ms-fill-upper {
    ${"" /* background: #367ebd; */}
  }
`;

function VolumeRange({ volume, color1 = "#EFEFEF", ...props }) {
  return (
    <VolumeRangeStyle
      {...props}
      value={Math.round(volume() * 100)}
      type="range"
      min="0"
      max="100"
      onChange={e => volume(e.target.value / 100)}
      color1={color1}
    />
  );
}

const PinquinRadioStyle = styled.div`
  color: ${props => props.color || "black"};
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-image: linear-gradient(
    to top,
    ${props => props.color1},
    ${props => props.color2}
  );
`;

const useUserInactivity = ({ wait = 5000 } = {}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    let to;
    const _handler = () => {
      if (active) return false;
      clearTimeout(to);
      to = setTimeout(() => {
        clearTimeout(to);
        setActive(false);
      }, wait);
      setActive(true);
    };
    const evts = [
      "mouseenter",
      "mouseleave",
      "mousemove",
      "mouseout",
      "mouseover",
      "mouseup"
    ];
    evts.forEach(evName => window.addEventListener(evName, _handler, false));
    return () => {
      evts.forEach(evName => window.removeEventListener(evName, _handler));
    };
  }, [active, wait]);
  return active;
};

export function PinquinRadio() {
  const activity = useUserInactivity({ wait: 5000 });

  const {
    audio,
    pause,
    play,
    stations,
    selectedStation,
    setSelectedStation,
    audioState,
    volume
  } = usePinquinRadio();

  const [color1, color2] = selectedStation.colors;

  return (
    <>
      {!activity && !audioState.paused ? (
        <PinquinRadioStyle
          color={selectedStation.color}
          className="PinquinRadio"
          style={{
            backgroundImage: `url(https://picsum.photos/1024/768?cache=${selectedStation.id})`,
            backgroundSize: "cover"
          }}
        >
          <div
            style={{
              position: "fixed",
              bottom: "48px",
              right: "48px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: color2,
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px"
            }}
          >
            <img
              src="images/soundbar.gif"
              style={{
                width: "25px",
                height: "25px",
                filter: "grayscale(100%)",
                marginRight: "16px"
              }}
              alt="logo"
            />
            <img
              src={`images/logos/${selectedStation.id}.svg`}
              style={{
                marginRight: "16px",
                height: "50px"
              }}
              alt="logo"
            />
            <div>
              <small>Now playing</small>
              <br />
              <div>Pinquin {selectedStation.name} Radio</div>
            </div>
          </div>
        </PinquinRadioStyle>
      ) : (
        <PinquinRadioStyle
          color={selectedStation.color}
          color1={color1}
          color2={color2}
          className="PinquinRadio"
        >
          <main className="container player">
            <img
              src={`images/logos/${selectedStation.id}.svg`}
              style={{
                marginRight: "16px",
                height: "100%"
              }}
              alt="logo"
            />
            <div
              style={{
                marginLeft: "16px",
                color: "black",
                minWidth: "256px"
              }}
            >
              <div
                style={{
                  marginBottom: "8px",
                  height: "100%"
                }}
              >
                <PlayPause
                  style={{ height: "100%" }}
                  defaultIsPlaying={!audioState.paused}
                  onChange={isPlaying => {
                    if (isPlaying) {
                      play();
                    } else {
                      pause();
                    }
                  }}
                  play={<PlayIcon color={color1} style={{ height: "100%" }} />}
                  pause={
                    <PauseIcon style={{ height: "100%" }} color={color1} />
                  }
                />
              </div>
              <div>
                <small>Now playing</small>
                <br />
                <div>Pinquin {selectedStation.name} Radio</div>
                <br />
                <VolumeRange volume={volume} color1={color1} color2={color2} />
              </div>
            </div>
          </main>
          <ul className="stations">
            {stations.stations.map(station => {
              const key = `StationsListKey${station.id}`;
              const _clickHandler = () => {
                setSelectedStation(station.id);
                if (audioState.paused) {
                  play();
                }
              };
              return (
                <li key={key} onClick={_clickHandler}>
                  <div
                    style={{
                      width: "200px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <img
                      src={`images/logos/${station.id}.svg`}
                      height="75"
                      style={{ borderRadius: "25px", marginRight: "16px" }}
                      alt="logo"
                    />
                    <div>{station.name}</div>
                  </div>
                </li>
              );
            })}
            <li
              onClick={() => {
                const getRandom = () => {
                  const random =
                    stations.stations[
                      Math.floor(Math.random() * stations.stations.length)
                    ];
                  if (random.id === selectedStation.id) {
                    return getRandom();
                  }
                  return random;
                };
                const randomStation = getRandom();
                setSelectedStation(randomStation.id);
              }}
            >
              I feel lucky
            </li>
          </ul>
        </PinquinRadioStyle>
      )}
      {audio}
    </>
  );
}
