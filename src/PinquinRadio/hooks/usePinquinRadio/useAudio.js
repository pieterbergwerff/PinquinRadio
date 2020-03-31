import { useAudio as useAudioHook } from "react-use";
import { logPlayerState } from "../../utils";

export function useAudio({ name, url }) {
  const [audio, state, controls, ref] = useAudioHook({
    src: url.mp3,
    autoPlay: false
  });
  const play = () => {
    if (state.paused) {
      controls.play();
      logPlayerState(true);
    }
  };
  const pause = () => {
    if (!state.paused) {
      controls.pause();
      logPlayerState(false);
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
  };
  return { audio, play, pause, audioState: state, volume, controls };
}
