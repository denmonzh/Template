import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/styleFeautures.css'


export const titleFeatures = (
    <Grid item container md={12} sm={12} xs={12} className='featuresTitleContainer'>
        <Grid className='titleTextFeatures'>
            <span>LandX Features</span>
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