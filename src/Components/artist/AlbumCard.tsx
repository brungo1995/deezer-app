import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IAlbum, ITrackAlbum } from "../../Entities/album.interface";
import { formatFansNumberInK } from "../../utils/utils"
import moment from "moment"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function AlbumCard(album: IAlbum) {
    const classes = useStyles();
    const { title, cover_medium, release_date, fans, } = album;


    return (
        <Card className={classes.root} style={{ margin: useMediaQuery('(max-width:600px)') ? "auto" : "", }}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={cover_medium}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" noWrap component="h2">{title}</Typography>
                <Typography gutterBottom component="h6">Fans: {formatFansNumberInK(fans)}</Typography>
                <Typography gutterBottom component="h6">Released: {moment(release_date).format("YYYY-MM-DD")}</Typography>
            </CardContent>
        </Card>
    );
}
