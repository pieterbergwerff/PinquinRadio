import React, { useState, useEffect } from "react";

export function PlayPause({
  defaultIsPlaying = false,
  style = {},
  onChange = null,
  play = "play",
  pause = "pause",
  ...props
} = {}) {
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);
  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(isPlaying);
    }
  }, [onChange, isPlaying]);
  const _clickHandler = () => setIsPlaying(!isPlaying);
  style = { cursor: "pointer", ...style };
  return (
    <span style={style} onClick={_clickHandler} {...props}>
      {isPlaying ? pause : play}
    </span>
  );
}
