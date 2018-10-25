import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/headerStyle.css'

import imgLogo from './img/LandX_Logo.png'
import facebook from './img/facebook-4-32.png'
import twitter from './img/twitter-4-32.png'
import linkedIn from './img/linkedin-4-32.png'



export const Logo = (
    <Grid item container md={12} sm={12} xs={12} className='mainLogoContainer'>
        <Grid item md={6} sm={6} xs={6} className='headLogoContainer'>
            <img src={imgLogo} alt='logo'/>
        </Grid>
        <Grid item md={6} sm={6} xs={6} className='headLogoContainer'>
            <Grid className='iconContainer'>
                <a href='https://facebook.com'><img src={facebook} alt='facebook'/></a>
                <a href='https://twitter.com'><img src={twitter} alt='facebook'/></a>
                <a href='https://linkedin.com'><img src={linkedIn} alt='facebook'/></a>
            </Grid>
        </Grid>
    </Grid>
);

