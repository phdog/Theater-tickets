import React from 'react';
import {times} from 'lodash';

import Seat from 'components/Seat.element';


const Venue = ({occupied, selected, occupySeats, clickSeat, clearSelection, setMessageVisible}) => {

  const renderRow = (row) => {

    return (
      <div className="Row" key={row}>
        {times(10, (seat) => {
          const id = `${row}:${seat}`;

          return (
            <Seat
              key={id}
              onClick={() => clickSeat(id) && setMessageVisible(false)}
              isOccupied={occupied.includes(id)}
              isSelected={selected.includes(id)}
            />
          );
        })}
      </div>
    );
  }

  const handleAddClick = () => {
      occupySeats(selected);
      clearSelection();
      setMessageVisible(true);
  }

  const handleCancelClick = () => {
      clearSelection();
  }

    return (
      <div>

          {times(10, (row) => renderRow(row))}

          <div className="Order">

            <button
              className="Button"
              disabled={!selected.length}
              onClick={handleAddClick}
              >
                Купить
              </button>

            <button
              className="Button__cancel"
              disabled={!selected.length}
              onClick={handleCancelClick}
              >
                Отменить
              </button>

          </div>
      </div>
    );
}

export default Venue;
