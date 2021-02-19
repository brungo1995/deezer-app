import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(12),
            },
        },
    }),
);

interface props {
    message: JSX.Element | string;
    onOk: () => void;
    onClose: (state: any) => void;
}

export default function AlertDialog(props: props) {
    const { message, onOk, onClose } = props;

    return (
        <div>
            <Dialog
                open={true}
                onClose={() => { }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div ></div>
                <DialogTitle id="alert-dialog-title" style={{ minWidth: "250px" }}>{"Info"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                        {message}
                    </DialogContentText>
                </DialogContent>
                <Button onClick={() => onClose(false)} color="primary" >
                    Ok
            </Button>
            </Dialog>
        </div>
    );
}