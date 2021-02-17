import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IArtist } from "../../Domain/Entities/artist.interface";
import { kFormatter } from "../../utils/utils"
import { useHistory } from "react-router-dom"
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function SearchCard(searchItem: IArtist) {
    const classes = useStyles();
    const { name, id, picture_medium, nb_fan } = searchItem;
    const history = useHistory();

    function onCardClick() {
        history.push(`/artist/${searchItem.id}`)
    }

    return (
        <Card className={classes.root} style={{ margin: useMediaQuery('(max-width:600px)') ? "auto" : "" }} onClick={onCardClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={picture_medium}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                    <Typography gutterBottom component="h6">Fans: {kFormatter(nb_fan)}</Typography>

                </CardContent>
            </CardActionArea>

        </Card>
    );
}
