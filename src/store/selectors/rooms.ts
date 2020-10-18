import { AppState, Room } from '../constants/action-types';

const selectRoomsList = (roomsState: any): Array<Room> => {
    return roomsState.roomsState.rooms;
}

// const selectSeasonStats = ({ raceStandingsState }, seasonId) => {
//   const storeSeasonData = raceStandingsState.seasonData.find((seasonStats) => seasonStats.season === seasonId);
//   return storeSeasonData ? storeSeasonData : null;
// };
//
// const isSeasonDataStored = ({ raceStandingsState }, seasonId) => {
//   const indexOfSeasonData = raceStandingsState.seasonData.findIndex((season) => season.season === seasonId);
//   return indexOfSeasonData !== -1;
// };
//
// const selectChampBySeason = ({ raceStandingsState }, seasonId) => {
//   const seasonChamp = raceStandingsState.champsList.find((champ) => champ.season === seasonId);
//   return seasonChamp ? seasonChamp : null;
// };

export { selectRoomsList };
