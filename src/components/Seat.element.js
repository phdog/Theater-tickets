import React from 'react';
import classnames from 'classnames';


const Seat = ({isOccupied, isSelected, onClick}) => (
    <div
        className={classnames('Seat', {
            'Seat__occupied': isOccupied,
            'Seat__selected': isSelected
        })}
        onClick={isOccupied ? undefined : onClick}
    />


);

export default Seat;
