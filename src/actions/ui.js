import {SET_MESSAGE_VISIBLE} from 'actions/types';

export const setMessageVisible = (flag) => ({
    type: SET_MESSAGE_VISIBLE,
    payload: flag
})
