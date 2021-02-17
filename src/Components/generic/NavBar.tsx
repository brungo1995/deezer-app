import React, { useState, KeyboardEventHandler } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists, artistsSelector, setQuery } from '../../Data/DataSources/slices/search';
import { NavBarStyles } from "./NavBar.styles"


export default function NavBar() {
    // const [searchText, setSearchText] = useState("")
    const classes = NavBarStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { query } = useSelector(artistsSelector)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setQuery(e.target.value))
        // setSearchText(e.target.value)
    }

    function onMovetoSearch() {
        history.replace("/search")
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key.toLocaleLowerCase() === 'enter') {
            console.log()
            dispatch(fetchArtists())
            // dispatch(fetchArtists("kanye"))
        }
    }

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={onMovetoSearch}>
                        <MusicNoteIcon
                            className={classes.menuButton}
                            style={{ color: "white" }}
                        />

                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={query || ""}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(e)}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}
