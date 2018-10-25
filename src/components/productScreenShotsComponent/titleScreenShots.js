import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/styleScreenShots.css'

export const TitleScreenShots = (
    <Grid item container md={12} sm={12} xs={12} className='titleScreenShotsContainer'>
        <Grid className='titleTextFeatures'>
            <span>Product Screenshots</span>
        </Grid>
        <Grid style={{height: '30px', paddingTop:'30px'}}>
            <Grid className='shape'>
            </Grid>
        </Grid>
        <Grid className='titleInfoTextFeatures'>
            <span>Term sheet convertible note colluding bootstrapping.</span>
        </Grid>
    </Grid>
);