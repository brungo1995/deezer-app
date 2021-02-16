import { makeStyles } from '@material-ui/core/styles';

export const searchStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));


export const gridSearchStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(12)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

