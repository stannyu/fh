import React from 'react';

import RoomSelectionHeader from './RoomSelectionHeader';
import RoomSelectionFilters from './RoomSelectionFilters';
import RoomSelectionContent from './RoomSelectionContent';

const RoomSelection = (): JSX.Element => {
  const clickBackHandler = (val: string): void => {
    console.log('click back', val);
  };
  return (
    <>
      <RoomSelectionHeader onClickBack={(e) => clickBackHandler(e)} />
      <RoomSelectionFilters />
      <RoomSelectionContent />
    </>
  );
};

export default RoomSelection;
