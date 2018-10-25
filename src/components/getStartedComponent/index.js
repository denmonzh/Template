import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/getStartersStyle.css'

export const getStarted = (
    <Grid item container md={12} sm={12} xs={12} className='getStartedMainContainer'>
        <Grid md={10} sm={10} xs={10} item container className='containerGetStarted'>
            <Grid>
                <span className='weAreTextGet'>We Are Ready to Help You</span>
            </Grid>
            <Grid style={{paddingTop:'23px', textAlign:'center'}}>
                <span className='solutionsTextGet'>Get the Best Solution for Your Business</span>
            </Grid>
            <Grid style={{paddingTop:'56px', height:'130px'}}>
                <button className='getStartedButton'>Get Started &#8594;</button>
            </Grid>
        </Grid>
    </Grid>
);