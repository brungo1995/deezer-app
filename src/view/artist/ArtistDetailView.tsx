import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from "../../Components/generic/NavBar"
import AlbumCard from "../../Components/artist/AlbumCard"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, createStyles, makeStyles, Theme, useMediaQuery } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArtistDetailCard from "../../Components/artist/ArtistDetailCard"
import TopTracks from "../../Components/artist/TopTracks"
import searchRes from "../../../src/dummy_data/search.json"
import albumshRes from "../../../src/dummy_data/albums.json"
import top_tracks from "../../../src/dummy_data/top_tracks.json"
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router"
import AlbumsContainer from '../../Components/artist/AlbumsContainer';
import { artistSelector, fetchArtist, fetchArtistTopTracks, fetchArtistAlbums, clearState } from '../../Data/DataSources/slices/artistDetail'
import { useDispatch, useSelector, } from 'react-redux';
import { IArtist } from '../../Domain/Entities/artist.interface';

interface RouteParams { id: string }

export default function SearchView() {
    const classes = gridSearchStyle();
    const dispatch = useDispatch();
    const { artist, hasErrors, loading, topTracks, albums } = useSelector(artistSelector);
    const { id } = useParams() as RouteParams;

    useEffect(() => {
        getData();
    }, [id]);


    async function getData() {
        // dispatch(fetchArtist(id));
        // dispatch(fetchArtistTopTracks(id));
        // dispatch(fetchArtistAlbums(id));

        dispatch(clearState())
        dispatch(fetchArtist(id));
        dispatch(fetchArtistTopTracks(id));
        dispatch(fetchArtistAlbums(id));

    }

    return (
        <>
            <Container maxWidth="md">
                <div className={classes.root}>
                    {
                        (loading &&
                            <Grid container spacing={3} style={{
                                justifyContent: 'center'
                            }}>
                                < CircularProgress />
                            </Grid>

                        ) ||

                        <Grid container spacing={4} >
                            <Grid item xs={12} sm={8} >
                                <ArtistDetailCard
                                    {...artist} />
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <TopTracks topTracks={topTracks} />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: "5rem" }}>
                                <AlbumsContainer albums={albums} />
                            </Grid>
                        </Grid>
                    }
                </div>
            </Container>
        </>
    )
}
