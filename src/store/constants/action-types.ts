export const SAVE_ROOMS_LIST = 'SAVE_ROOMS_LIST';
export const SELECT_FILTER = 'SELECT_FILTER';

export interface AppState {
  rooms: Array<Room>;
  selectedFilter: string;
}

export interface Room {
  id: string;
}

export interface RoomFilter {
  filter: string;
}

interface SaveRoomsListAction {
  type: typeof SAVE_ROOMS_LIST;
  payload: Array<Room>;
}

interface SelectFilterAction {
  type: typeof SELECT_FILTER;
  payload: RoomFilter
}

export type RoomsActionTypes = SaveRoomsListAction | SelectFilterAction;
