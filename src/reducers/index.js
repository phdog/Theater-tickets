import {combineReducers} from 'redux';

import venue from './venue';
import ui from './ui';

export default combineReducers({
  venue,
  ui
})
