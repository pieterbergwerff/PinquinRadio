import React from "react";

export function PauseIcon({ size = 64, color, ...props }) {
  return (
    <span style={{ color, fontSize: size + "px" }}>
      <i className="fas fa-pause-circle" {...props}></i>
    </span>
  );
}
