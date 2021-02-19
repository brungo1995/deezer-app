import React, { useState, useContext, } from 'react'
import SearchCard from "../../Components/search/SearchCard"
import Container from '@material-ui/core/Container';
import { CircularProgress, Typography } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { AlertContext } from "../../context_providers/alert_provider";

import { artistsSelector, clearError } from '../../slices/search'

export default function SearchView() {
    const classes = gridSearchStyle();
    const { artists, loading, hasErrors, errorMessage } = useSelector(artistsSelector)
    const { error } = useContext(AlertContext)
    const dispatch = useDispatch();


    function renderErrorIfExists() {
        return hasErrors ? error(errorMessage, () => {
            dispatch(clearError())
        }
        ) : null
    }

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
                        !loading && (artists || []).length == 0 ? (
                            <div>
                                <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                                    <Typography gutterBottom variant="h6" component="h2">No artists found</Typography>
                                </Grid>
                            </div>
                        ) : null
                    }

                    {renderErrorIfExists()}
                </div>
            </Container>
        </>
    )
}
