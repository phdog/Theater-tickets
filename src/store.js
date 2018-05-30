import {createStore, compose} from 'redux';

import reducers from 'reducers';

const store = compose(createStore)(reducers);

export default store;
