import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IArtist } from '../../../Domain/Entities/artist.interface';

interface searchArtist {
    loading: boolean,
    hasErrors: boolean,
    artists: IArtist[],
}

export const initialState = {
    loading: false,
    hasErrors: false,
    artists: [],
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
    },
})

export const {
    getArtists,
    getArtistsSuccess,
    getArtistsFailure,
} = artistsSlice.actions


export const artistsSelector = (state: any) => state.artists;


export function fetchArtists(query: string) {

    return async (dispatch: Dispatch) => {
        dispatch(getArtists())
        try {
            const response = await fetch(`http://localhost:8000/search/artist?q=${query}`)
            const { data } = await response.json()

            dispatch(getArtistsSuccess(data))
        } catch (error) {
            dispatch(getArtistsFailure())
        }
    }
}


export default artistsSlice.reducer
