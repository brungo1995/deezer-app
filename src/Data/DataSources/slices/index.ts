import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from './posts';
import searchReducer from './search';
import artistReducer from './artistDetail';

const rootReducer = combineReducers({
    artists: searchReducer,
    posts: postsReducer,
    artist: artistReducer
})

export default rootReducer
