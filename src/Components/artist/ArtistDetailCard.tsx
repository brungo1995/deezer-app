import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IArtist } from '../../Entities/artist.interface';
import { formatFansNumberInK } from '../../utils/utils';
import placeholder_image from "../../assets/placeholder_image.jpg"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: 350
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            // paddingTop: 10,
            // paddingRight: 200,
            // paddingBottom: 230,
            // paddingLeft: 10,
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 255,
        },


    }),
);

export default function ArtistDetailCard(props: IArtist) {
    const classes = useStyles();
    const theme = useTheme();

    const { name, nb_fan, picture_big, picture_medium } = props;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={picture_big || placeholder_image}
                title={name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">{name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">Fans: {formatFansNumberInK(nb_fan || 0)}</Typography>
                </CardContent>
            </div>

        </Card>
    );
}
