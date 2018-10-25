import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/stylePricing.css'


export const titlePricing = (
    <Grid item container md={12} sm={12} xs={12} className='pricingTitleContainer'>
        <Grid className='titleTextPricing'>
            <span>Pricing Table</span>
        </Grid>
        <Grid style={{height: '30px', paddingTop:'30px'}}>
            <Grid className='shape'>
            </Grid>
        </Grid>
        <Grid className='titleInfoTextPricing'>
            <span>Term sheet convertible note colluding bootstrapping.</span>
        </Grid>
    </Grid>
);