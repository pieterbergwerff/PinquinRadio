import store from "store";

export function sortStationsByPopularity(data = []) {
  const stats = store.get("stats") || {};
  const newData = { ...data };
  newData.stations = newData.stations
    .map(station => {
      const ranking = stats[station.id] || 0;
      station = { ...station, ranking };
      return station;
    })
    .sort((a, b) => (a.ranking > b.ranking ? -1 : 1));
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
