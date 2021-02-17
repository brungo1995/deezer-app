import { combineReducers } from '@reduxjs/toolkit'

import searchReducer from './search';
import artistReducer from './artistDetail';

const rootReducer = combineReducers({
    artists: searchReducer,
    artist: artistReducer
})

export default rootReducer
