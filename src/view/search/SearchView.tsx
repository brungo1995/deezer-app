import React from 'react'
import PrimarySearchAppBar from "../../Components/NavBar"
import SearchCard from "../../Components/SearchCard"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { gridSearchStyle } from "./styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import searchRes from "../../../src/dummy_data/search.json"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        row: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "5rem"

        }

    }),
);


export default function SearchView() {
    const classes = gridSearchStyle()

    return (
        <>
            <PrimarySearchAppBar />
            {/* <Container maxWidth="md" className={classes.row}> */}
            <Container maxWidth="md">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            (searchRes || []).map((item) => (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <SearchCard {...item} />
                                </Grid>)
                            )
                        }
                    </Grid>
                </div>
            </Container>

        </>
    )
}
