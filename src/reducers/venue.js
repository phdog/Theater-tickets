import {
  OCCUPY_SEATS,
  SELECT_SEAT,
  DESELECT_SEAT,
  CLEAR_SELECTION
} from 'actions/types';

const DEFAULT_STATE = {
  occupied: [],
  selected: []
};

const venue = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case OCCUPY_SEATS:
      return {...state, occupied: state.occupied.concat(payload)}
    case SELECT_SEAT:
      return {...state, selected: [...state.selected, payload]}
     case DESELECT_SEAT:
      const index = state.selected.indexOf(payload);
      return {...state, selected: [...state.selected.slice(0, index), ...state.selected.slice(index + 1)]}
    case CLEAR_SELECTION:
      return {...state, selected: []}
    default:
      return state
  }

}

export default venue;
