import {random} from 'lodash';
import store from 'store';

import {
    OCCUPY_SEATS,
    SELECT_SEAT,
    DESELECT_SEAT,
    CLEAR_SELECTION
} from 'actions/types';


export const prefillVenue = () => {
    const seats = new Set();

    while (seats.size < 10) {
        const row = random(9);
        const seat = random(9);
        seats.add(`${row}:${seat}`);
    };

    return {
        type: OCCUPY_SEATS,
        payload: [...seats]
    }
}

export const occupySeats = (seats) => ({
    type: OCCUPY_SEATS,
    payload: seats
})

export const clickSeat = (id) => {
    const {venue: {selected}} = store.getState();

    if (selected.includes(id)) {
        return {
            type: DESELECT_SEAT,
            payload: id
        }
    }
    return {
        type: SELECT_SEAT,
        payload: id
    }
}

export const clearSelection = () => ({
    type: CLEAR_SELECTION
})
