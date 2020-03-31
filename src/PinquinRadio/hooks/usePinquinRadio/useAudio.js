import { useAudio as useAudioHook } from "react-use";

export function useAudio({ name, url }) {
  const [audio, state, controls, ref] = useAudioHook({
    src: url.mp3,
    autoPlay: false
  });
  const play = () => {
    controls.play();
  };
  const pause = () => {
    controls.pause();
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
  return { audio, play, pause, audioState: state, volume };
}
