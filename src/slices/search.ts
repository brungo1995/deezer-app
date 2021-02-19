import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IArtist } from '../Entities/artist.interface';
import { store } from "../index";

interface searchArtist {
    loading: boolean,
    hasErrors: boolean,
    artists: IArtist[],
    query: string,
    errorMessage: string,
}

interface IState {
    artists: searchArtist
}

export const initialState = {
    loading: false,
    hasErrors: false,
    errorMessage: "",
    artists: [] as IArtist[],
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
        getArtistsFailure: (state, { payload }) => {
            state.loading = false
            state.hasErrors = true
            state.errorMessage = payload
        },
        clearError: (state) => {
            state.loading = false
            state.hasErrors = false
            state.errorMessage = ""
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
    clearError,
} = artistsSlice.actions


export const artistsSelector = (state: IState) => state.artists;

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

            const response = await fetch(`http://localhost:8000/search/artist?name=${query}`);

            const jsonRes = await response.json();

            if (!jsonRes.data) {
                const { error } = jsonRes
                console.log(jsonRes);
                dispatch(getArtistsFailure(error))
                return
            }

            const { data } = jsonRes
            dispatch(getArtistsSuccess(data));

        } catch (error) {
            console.log(error)
            dispatch(getArtistsFailure(error?.message || "Failed to get artists"))
        }
    }
}


export default artistsSlice.reducer
