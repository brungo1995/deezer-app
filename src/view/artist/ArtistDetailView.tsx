import React from 'react'
import PrimarySearchAppBar from "../../Components/generic/NavBar"
import AlbumCard from "../../Components/artist/AlbumCard"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme, useMediaQuery } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArtistDetailCard from "../../Components/artist/ArtistDetailCard"
import TopTracks from "../../Components/artist/TopTracks"
import searchRes from "../../../src/dummy_data/search.json"
import albumshRes from "../../../src/dummy_data/albums.json"
import top_tracks from "../../../src/dummy_data/top_tracks.json"


export default function SearchView() {
    const classes = gridSearchStyle()

    return (
        <>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} sm={8} >
                            <ArtistDetailCard />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <TopTracks />
                        </Grid>
                        <Grid item xs={12} style={{ marginTop: "5rem" }}>
                            <Typography component="h5" variant="h5" style={{ textAlign: useMediaQuery('(max-width:600px)') ? "center" : "left", marginBottom: "1rem" }} >Albums</Typography>
                            <Grid container spacing={3}>
                                {
                                    (albumshRes || []).map((item) => (
                                        <Grid item xs={12} sm={6} md={3} key={item.id}>
                                            <AlbumCard {...item} />
                                        </Grid>)
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </>
    )
}
