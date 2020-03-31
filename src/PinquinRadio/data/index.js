import { stations as stationsData } from "./stations";

function enrichStations() {
  return {
    stations: [...stationsData],
    idExists(id = "") {
      const found = this.stations.filter(station => station.id === id);
      return found && found.length ? true : false;
    },
    getById(id = "") {
      const found = this.stations.filter(station => station.id === id);
      return found && found.length ? found[0] : false;
    },
    getNameById(id = "") {
      const found = this.getById(id);
      return found ? found.name : false;
    },
    getUrlById(id = "") {
      const found = this.getById(id);
      return found ? found.url : false;
    },
    getMp3UrlById(id = "") {
      const found = this.getUrlById(id);
      return found ? found.mp3 : false;
    }
  };
}

export const stations = enrichStations();
