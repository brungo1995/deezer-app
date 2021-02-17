import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IArtist, ITrackArtist } from '../../../Domain/Entities/artist.interface';
import { IArtistTrack } from '../../../Domain/Entities/track.interface';
import { IAlbum } from '../../../Domain/Entities/album.interface';
import { store } from "../../../index";
import { BASE_URL } from '../../../utils/api';

interface IArtistDetail {
    loading: boolean,
    hasErrors: boolean,
    artist: IArtist,
    topTracks: IArtistTrack[],
    albums: IAlbum[]
}

interface IState {
    artist: IArtistDetail
}

export const initialState = {
    loading: false,
    hasErrors: false,
    artist: {},
    topTracks: [] as IArtistTrack[],
    albums: [] as IAlbum[]
}

const artistSlice = createSlice({
    name: 'artist',
    initialState: initialState as IArtistDetail,
    reducers: {
        resetArtistDetailState: state => {
            state.loading = false;
            state.hasErrors = false;
            state.artist = {} as IArtist;
            state.topTracks = [] as IArtistTrack[];
            state.albums = [] as IAlbum[]
        },

        startGettingArtist: state => {
            state.loading = true
        },

        finishGettingArtist: state => {
            state.loading = false
        },

        getArtistSuccess: (state, { payload }) => {
            state.artist = payload
            // state.loading = false
            // state.hasErrors = false
        },

        getArtistToTracksSuccess: (state, { payload }) => {
            state.topTracks = payload
            // state.loading = false
            // state.hasErrors = false
        },

        getArtistAlbumsSuccess: (state, { payload }) => {
            state.albums = payload
        },

        getArtistFailure: state => {
            state.loading = false
            state.hasErrors = true
        },

    },
})

export const {
    startGettingArtist,
    finishGettingArtist,
    getArtistSuccess,
    getArtistFailure,
    getArtistToTracksSuccess,
    getArtistAlbumsSuccess,
    resetArtistDetailState

} = artistSlice.actions


export const artistSelector = (state: IState) => state.artist;

export function clearState() {
    return (dispatch: Dispatch) => dispatch(resetArtistDetailState())
}

export function fetchArtist(artistId: string) {

    return async (dispatch: Dispatch) => {
        try {
            // dispatch(getArtist())
            let url = `${BASE_URL}/artist/${artistId}`
            const response = await fetch(url)
            const data = await response.json()
            dispatch(getArtistSuccess(data));

        } catch (error) {
            console.log(error)
            dispatch(getArtistFailure())
        }
    }
}

export function fetchArtistTopTracks(artistId: string) {

    return async (dispatch: Dispatch) => {
        try {
            let url = `${BASE_URL}/artist/${artistId}/top?limit=5`
            const response = await fetch(url);
            const { data } = await response.json()
            dispatch(getArtistToTracksSuccess(data));

        } catch (error) {
            console.log(error)
            dispatch(getArtistFailure())
        }
    }
}

export function fetchArtistAlbums(artistId: string) {

    return async (dispatch: Dispatch) => {
        try {
            let url = `${BASE_URL}/artist/${artistId}/albums`
            const response = await fetch(url);
            const { data } = await response.json();

            dispatch(getArtistAlbumsSuccess(data));

        } catch (error) {
            console.log(error)
            dispatch(getArtistFailure())
        }
    }
}


export default artistSlice.reducer
