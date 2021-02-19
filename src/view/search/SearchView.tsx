import React, { useState } from 'react'
import SearchCard from "../../Components/search/SearchCard"
import Container from '@material-ui/core/Container';
import { CircularProgress, Typography } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import { artistsSelector } from '../../slices/search'

export default function SearchView() {
    const classes = gridSearchStyle();
    const { artists, loading } = useSelector(artistsSelector)

    return (
        <>
            <Container maxWidth="md">
                <div className={classes.root}>
                    {
                        (loading &&
                            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
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
                    {
                        !loading && artists.length == 0 ? (

                            <div>

                                <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                                    <Typography gutterBottom variant="h6" component="h2">No artists found</Typography>
                                </Grid>
                            </div>
                        ) : null
                    }

                </div>
            </Container>
        </>
    )
}
