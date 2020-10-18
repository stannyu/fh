import React from 'react';
import './room-selection.scss';

interface SelectionHeaderProps {
  onClickBack: (e: string) => void;
}

const RoomSelectionHeader = (props: SelectionHeaderProps) => {
  const { onClickBack } = props;
  return (
    <header className="selection-header" onClick={() => onClickBack('variable')}>
      <div className="back-control">
        <div className="icon-container"></div>
      </div>
      <div>
        <h3 className="selection-header-title">All Deals</h3>
        <p className="selection-header-query">DOUBLE TREE BY HILTON HOTEL</p>
      </div>
    </header>
  );
};

export default RoomSelectionHeader;
