import {
  AppState,
  RoomsActionTypes,
  SAVE_ROOMS_LIST,
  SELECT_FILTER
} from '../constants/action-types';

const INITIAL_STATE: AppState = {
  rooms: [],
  selectedFilter: 'no-filter'
};

const applyStoreRoomsList = (state: AppState, action: RoomsActionTypes) => {
  const rooms = action.payload;
  return { ...state, rooms };
};

const applyStoreSeasonData = (state: AppState, action: RoomsActionTypes) => {
  return state;
};

function raceStandingsReducer(state = INITIAL_STATE, action: RoomsActionTypes) {
  switch (action.type) {
    case SAVE_ROOMS_LIST: {
      return applyStoreRoomsList(state, action);
    }
    case SELECT_FILTER: {
      return applyStoreSeasonData(state, action);
    }
    default:
      return state;
  }
}

export default raceStandingsReducer;
