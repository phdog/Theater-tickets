import {SET_MESSAGE_VISIBLE} from 'actions/types';

const DEFAULT_STATE = {
    isMessageVisible: false
}

const ui = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case SET_MESSAGE_VISIBLE:
            return {...state, isMessageVisible: payload}
        default:
            return state;
    }
}

export default ui;
