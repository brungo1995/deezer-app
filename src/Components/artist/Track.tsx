import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { IArtistTrack } from "../../Domain/Entities/track.interface";
import { secondsToMinutes } from '../../utils/utils';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(1),
        },
    }),
);

const message = `Truncation should be conditionally applicable on this long line of text
as this is a much longer line than what the container can support. `;

export default function Track(props: any) {
    const classes = useStyles();

    const { index } = props
    const { title_short, duration } = props.item;
    return (
        <div className={classes.root} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Paper className={classes.paper} >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Typography noWrap>{index}</Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{title_short}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{secondsToMinutes(duration)}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
