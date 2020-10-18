import React, { useEffect } from 'react';
import './App.scss';

import { doSaveRoomsData } from './store/actions/rooms';
import { Room } from './store/constants/action-types';

import roomsData from './sample-hotel-data.json';

import RoomSelection from './components/Selection/RoomSelection';
import { Provider } from 'react-redux';
import store from './store/index';

function App(): JSX.Element {
  useEffect(() => {
    store.dispatch(doSaveRoomsData(roomsData.results as Array<Room>));
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="main-wrapper">
          <RoomSelection />
        </div>
      </div>
    </Provider>
  );
}

export default App;
