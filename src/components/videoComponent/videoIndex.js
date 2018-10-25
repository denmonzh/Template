import React from 'react'
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'


export const Video = (
    <Grid item md={12} xs={12} sm={12} container style={{justifyContent:'center', paddingTop:'100px'}}>
        <ReactPlayer url='https://vimeo.com/60507919' width={945} height={532} />
    </Grid>
);