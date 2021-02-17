import { combineReducers } from '@reduxjs/toolkit'

import postsReducer from './posts';
import searchReducer from './search';

const rootReducer = combineReducers({
    artists: searchReducer,
    posts: postsReducer,
    // post: postReducer,
    // comments: commentsReducer,
})

export default rootReducer
