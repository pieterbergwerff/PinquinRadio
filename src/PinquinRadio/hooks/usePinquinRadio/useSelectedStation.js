import { useState } from "react";
import store from "store";
import { stations } from "../../data";
import { logSelectedStation } from "../../utils";

export function useSelectedStation({ defaultSelectedStation = "indie" }) {
  defaultSelectedStation = stations.idExists(defaultSelectedStation)
    ? defaultSelectedStation
    : "indie";
  const cached =
    store.get("selectedStationId") &&
    stations.idExists(store.get("selectedStationId"))
      ? store.get("selectedStationId")
      : false;
  if (cached) {
    defaultSelectedStation = cached;
  }
  const [selectedStationId, setSelectedStationId] = useState(
    defaultSelectedStation
  );

  const setSelectedStation = (id = "") => {
    if (!stations.idExists(id) || selectedStationId === id) return false;
    store.set("selectedStationId", id);
    setSelectedStationId(id);
    logSelectedStation(id);
  };

  const selectedStation = stations.getById(selectedStationId);
  return { selectedStation, setSelectedStation };
}
