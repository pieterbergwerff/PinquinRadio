import { stations } from "../../data";
import { useAudio } from "./useAudio";
import { useSelectedStation } from "./useSelectedStation";
import { sortStationsByPopularity, getLoggedPlayerState } from "../../utils";

export function usePinquinRadio({ defaultSelectedStation = "indie" } = {}) {
  const {
    selectedStation,
    setSelectedStation,
    selectedStationTotalAirtimeStr
  } = useSelectedStation({
    defaultSelectedStation
  });
  const { audio, audioState, pause, play, volume, controls } = useAudio(
    selectedStation
  );
  return {
    audio,
    pause,
    play,
    audioState,
    stations: sortStationsByPopularity(stations),
    selectedStation,
    setSelectedStation,
    volume,
    controls,
    selectedStationTotalAirtimeStr
  };
}
