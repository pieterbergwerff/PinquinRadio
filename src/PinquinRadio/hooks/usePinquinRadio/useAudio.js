import useDidMount from "@rooks/use-did-mount";
import { useAudio as useAudioHook } from "react-use";
import {
  logPlayerState,
  logStationAirtime,
  logPlayerVolume,
  getLoggedPlayerVolume
} from "../../utils";

export function useAudio({ id, name, url }) {
  const [audio, state, controls, ref] = useAudioHook({
    src: url.mp3,
    autoPlay: false
  });
  const play = () => {
    if (state.paused) {
      controls.play();
      logPlayerState(true);
      logStationAirtime(id, "play");
    }
  };
  const pause = () => {
    if (!state.paused) {
      controls.pause();
      logPlayerState(false);
      logStationAirtime(id, "pause");
    }
  };
  const volume = (newVolume = null) => {
    if (!newVolume) {
      // getter
      if (ref.current) {
        return ref.current.volume;
      }
      return false;
    }
    // setter
    controls.volume(newVolume);
    logPlayerVolume(Math.round(newVolume * 100));
  };
  useDidMount(() => {
    volume(getLoggedPlayerVolume());
  });
  return { audio, play, pause, audioState: state, volume, controls };
}
