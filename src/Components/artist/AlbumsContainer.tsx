import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import albumshRes from "../../../src/dummy_data/albums.json"
import { IAlbum } from '../../Domain/Entities/album.interface'
import AlbumCard from './AlbumCard'

export default function AlbumsContainer({ albums }: { albums: IAlbum[] }) {
    return (
        <div>
            <Typography component="h5" variant="h5" style={{ textAlign: useMediaQuery('(max-width:600px)') ? "center" : "left", marginBottom: "1rem" }} >Albums</Typography>
            <Grid container spacing={4}>
                {
                    (albums || []).map((item) => (
                        <Grid item xs={12} sm={4} md={3} key={item.id}>
                            <AlbumCard {...item} />
                        </Grid>)
                    )
                }
            </Grid>
        </div>
    )
}
