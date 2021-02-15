import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.loading = true;

        },
        getPostsSuccess: (state, { payload }) => {
            state.posts = payload;
            state.loading = false;
            state.hasErrors = false;
        },

        getPostsFailure: (state) => {
            state.loading = false;
            state.hasErrors = true
        }

    }
});

// Three actions generated from the slice
export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

// A selector
export const postsSelector = (state: any) => state.posts

// a selector, which we'll use to access any of the state from a React component instead of using connect
export default postsSlice.reducer;

// Async thunk action
export function fetchPosts() {
    return async (dispatch: any) => {
        dispatch(getPosts())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPostsSuccess(data))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}