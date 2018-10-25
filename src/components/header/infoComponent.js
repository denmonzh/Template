import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/headerStyle.css'





export const Info = (
    <Grid item container md={12} sm={12} xs={12} className='mainInfoContainer'>
        <Grid item md={12} sm={12} xs={12} container className='mainTextInfoContainer'>
            <span className='mainTextWhite'>Get the Best <span className='mainTextBlue'>Solution</span> for Your <span className='mainTextWhiteMedium'>Business</span></span>
        </Grid>
        <Grid item md={12} sm={12} xs={12} className='smallTextContainer' container>
            <span className='smallTextInfo'>Accelerator photo sharing business school drop out ramen hustle crush it revenue traction platforms. Coworking viral landing page user base.</span>
        </Grid>
    </Grid>
);

