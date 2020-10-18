import { combineReducers } from 'redux';

import roomsReducer from './rooms-reducer';

const rootReducer = combineReducers({
  roomsState: roomsReducer
});

export default rootReducer;
