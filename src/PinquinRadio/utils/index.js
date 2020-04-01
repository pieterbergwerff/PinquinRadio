import store from "store";

export function sortStationsByPopularity(data = []) {
  let newData = { ...data };
  newData.stations = newData.stations
    .map(station => {
      const { ms } = getLoggedStationAirtime(station.id);
      station.totalDuration = ms || 0;
      return station;
    })
    .sort((a, b) => (a.totalDuration > b.totalDuration ? -1 : 1));

  return newData;
}

export function logSelectedStation(selectedStationId) {
  let stationStats = { ...(store.get("stats") || {}) };
  if (typeof stationStats[selectedStationId] !== "number") {
    stationStats[selectedStationId] = 0;
  }
  stationStats[selectedStationId]++;
  store.set("stats", stationStats);
}

export function getLoggedPlayerState() {
  return store.get("playerState");
}

export function logPlayerState(isPlaying = false) {
  store.set("playerState", isPlaying);
}

export function getLoggedStationAirtime(stationId) {
  const stationsDurations = { ...(store.get("stationsDurations") || {}) };
  if (!stationsDurations[stationId]) return false;
  const { duration } = stationsDurations[stationId];
  return {
    ms: duration,
    toStr() {
      return msToHMS(duration);
    }
  };
}

function msToHMS(ms) {
  var seconds = ms / 1000;
  var hours = parseInt(seconds / 3600);
  hours = String(hours).padStart(2, "0");
  seconds = seconds % 3600;
  var minutes = parseInt(seconds / 60);
  minutes = String(minutes).padStart(2, "0");
  seconds = seconds % 60;
  seconds = Math.round(seconds);
  seconds = String(seconds).padStart(2, "0");
  return hours + ":" + minutes + ":" + seconds;
}

export function logStationAirtime(stationId, action = "") {
  const stationsDurations = { ...(store.get("stationsDurations") || {}) };
  const stopAll = () => {
    // stop all
    const ids = Object.keys(stationsDurations).length
      ? Object.keys(stationsDurations)
      : false;
    if (!ids) return false;
    ids.forEach(id => {
      let { start, duration } = { ...stationsDurations[id] };
      if (start > 0) {
        const diff = new Date().getTime() - start;
        stationsDurations[id].duration = duration + diff;
        stationsDurations[id].start = 0;
      }
    });
    store.set("stationsDurations", stationsDurations);
  };
  if (action === "play") {
    stopAll();
    stationsDurations[stationId] = {
      ...(stationsDurations[stationId] || {
        start: new Date().getTime(),
        duration: 0
      }),
      start: new Date().getTime()
    };
    store.set("stationsDurations", { ...stationsDurations });
  } else if (action === "pause") {
    stopAll();
  }
}

export function logPlayerVolume(volume = -1) {
  const currentVolume = store.get("volume") || 100;
  if (volume > -1 && volume < 101 && volume !== currentVolume) {
    store.set("volume", volume);
  }
}

export function getLoggedPlayerVolume() {
  return (store.get("volume") || 100) / 100;
}
