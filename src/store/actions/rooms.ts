import {
  SELECT_FILTER,
  SAVE_ROOMS_LIST,
  RoomsActionTypes,
  Room,
  RoomFilter
} from '../constants/action-types';

const doStoreFilter = (filter: RoomFilter): RoomsActionTypes => ({
  type: SELECT_FILTER,
  payload: filter
});

const doSaveRoomsData = (rooms: Array<Room>): RoomsActionTypes => {
  return {
    type: SAVE_ROOMS_LIST,
    payload: rooms
  };
};

export { doSaveRoomsData, doStoreFilter };
