import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from "../../Components/generic/NavBar"
import SearchCard from "../../Components/search/SearchCard"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import searchRes from "../../../src/dummy_data/search.json"
import { useDispatch, useSelector } from 'react-redux';

import { fetchArtists, artistsSelector } from '../../Data/DataSources/slices/search'
import { fetchPosts, postsSelector } from '../../Data/DataSources/slices/posts'

export default function SearchView() {
    const [loading, setIsLoading] = useState(false);
    const classes = gridSearchStyle();
    const dispatch = useDispatch();
    const { artists } = useSelector(artistsSelector)
    const { posts } = useSelector(postsSelector)

    useEffect(() => {
        dispatch(fetchArtists("kanye"))
        dispatch(fetchPosts())
    }, [dispatch]);


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
                        <Grid container spacing={3}>
                            {
                                (artists || []).map((item: any) => (
                                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                                        <SearchCard {...item} />
                                    </Grid>)
                                )
                            }
                        </Grid>
                    }

                </div>
            </Container>
        </>
    )
}
