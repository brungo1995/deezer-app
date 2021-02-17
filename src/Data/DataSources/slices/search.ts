import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { useSelector, } from 'react-redux';
import { IArtist } from '../../../Domain/Entities/artist.interface';
import { store } from "../../../index";

interface searchArtist {
    loading: boolean,
    hasErrors: boolean,
    artists: IArtist[],
    query: string
}

export const initialState = {
    loading: false,
    hasErrors: false,
    artists: [],
    query: ""
}

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {
        getArtists: state => {
            state.loading = true
        },
        getArtistsSuccess: (state, { payload }) => {
            state.artists = payload
            state.loading = false
            state.hasErrors = false
        },
        getArtistsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        setQueryText: (state, { payload }) => {
            state.query = payload
        },
    },
})

export const {
    getArtists,
    getArtistsSuccess,
    getArtistsFailure,
    setQueryText,

} = artistsSlice.actions


export const artistsSelector = (state: any) => state.artists;

export function setQuery(text: string) {
    return (dispatch: Dispatch) => {
        dispatch(setQueryText(text))
    }
}

export function fetchArtists() {

    return async (dispatch: Dispatch) => {
        try {
            const { artists } = store.getState()
            const { query } = artists
            dispatch(getArtists())
            const response = await fetch(`http://localhost:8000/search/artist?q=${query}`)
            const { data } = await response.json()
            dispatch(getArtistsSuccess(data));

        } catch (error) {
            console.log(error)
            dispatch(getArtistsFailure())
        }
    }
}


export default artistsSlice.reducer
