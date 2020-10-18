import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HotelCard from '../HotelCard/HorelCard';
import { selectRoomsList } from '../../store/selectors/rooms';
// import { AppState } from '../../store/reducers/rooms-reducer';

const RoomSelectionContent = () => {
  const rooms = useSelector(selectRoomsList);

  useEffect(() => {
    console.log(rooms, 'STATE');
    // setRooms(selectRoomsList());
    // console.log(rooms, "rooms", useSelector(selectRoomsList));
  }, [rooms]);

  return (
    <section className="selection-content">
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </section>
  );
};

export default RoomSelectionContent;

// const mapStateToProps = (state: AppState) => ({
//     roomsList: selectRoomsList(state)
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     getAsyncChampsList: (limit, offset) => dispatch(getAsyncChampsList(limit, offset))
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(RoomSelectionContent);
