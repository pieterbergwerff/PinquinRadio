import React from "react";

export function PlayIcon({ size = 64, color, ...props }) {
  return (
    <span style={{ color, fontSize: size + "px" }}>
      <i className="fas fa-play-circle" {...props}></i>
    </span>
  );
}
