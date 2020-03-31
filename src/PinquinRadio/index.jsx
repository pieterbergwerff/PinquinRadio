import React, { useState, useEffect } from "react";
import { usePinquinRadio } from "./hooks";
import { PlayPause, PlayIcon, PauseIcon } from "./components";
import "./style";

function Volume(props) {
  return <input {...props} type="range" min="0" max="100" />;
}

export function PinquinRadio() {
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

  //console.log(selectedStation);
  const [color1, color2] = selectedStation.colors;
  //console.log(color1, color2);
  const style = {
    color: selectedStation.color,
    backgroundImage: `linear-gradient(
    to top,
    ${color1},
    ${color2}
  `
  };

  return (
    <>
      {audio}
      <div className="PinquinRadio" style={style}>
        <main className="container player">
          <img
            src={`images/logos/${selectedStation.id}.svg`}
            style={{ marginRight: "16px", height: "100%" }}
            alt="logo"
          />
          <div style={{ marginLeft: "16px", color: "black" }}>
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
                play={<PlayIcon style={{ height: "100%" }} />}
                pause={<PauseIcon style={{ height: "100%" }} />}
              />
            </div>
            <div>
              <small>Now playing</small>
              <br />
              Pinquin {selectedStation.name}
            </div>
          </div>
        </main>
        <ul className="stations">
          {stations.stations.map(station => {
            const key = `StationsListKey${station.id}`;
            const _clickHandler = () => {
              setSelectedStation(station.id);
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
      </div>
    </>
  );

  return (
    <>
      {audio}
      Now playing: Pinquin {selectedStation.name}
      <div
        style={{
          display: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "green"
        }}
      >
        <div style={{ zIndex: 50 }}>
          <img src={`images/logos/${selectedStation.id}.svg`} height="300" />
        </div>
        <div style={{ zIndex: 100 }}>
          <PlayPause
            defaultIsPlaying={!audioState.paused}
            onChange={isPlaying => {
              if (isPlaying) {
                play();
              } else {
                pause();
              }
            }}
            play={<PlayIcon />}
            pause={<PauseIcon />}
          />
        </div>
      </div>
      <hr />
      <Volume
        value={volume() * 100}
        onChange={e => volume(e.target.value / 100)}
      />
      <hr />
      <ul>
        {stations.stations.map(station => {
          const key = `StationsListKey${station.id}`;
          const _clickHandler = () => {
            setSelectedStation(station.id);
          };
          return (
            <li key={key} onClick={_clickHandler}>
              {station.name}
            </li>
          );
        })}
      </ul>
      <pre>{JSON.stringify(audioState, null, 2)}</pre>
    </>
  );
}
