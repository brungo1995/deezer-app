import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, useMediaQuery } from '@material-ui/core';
import Track from './Track';
import { IAlbum, ITrackAlbum } from "../../Domain/Entities/album.interface";
import top_tracks from "../../../src/dummy_data/top_tracks.json"
import { IArtistTrack } from '../../Domain/Entities/track.interface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexDirection: "column"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <Typography component="h5" variant="h5" style={{ textAlign: useMediaQuery('(max-width:600px)') ? "center" : "left" }} >Top tracks:</Typography>
                </Grid>
                <Grid item xs={12} >
                    {
                        (top_tracks || []).map((item, index) => (
                            <Grid key={item.id}>
                                <Track
                                    item={item}
                                    index={index + 1} />
                            </Grid>)
                        )
                    }
                </Grid>
            </Grid>
        </div>
    );
}
