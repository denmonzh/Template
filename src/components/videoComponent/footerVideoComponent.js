import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/styleVideoContainer.css'

import icon1 from './img/user.png'
import icon2 from './img/video-player .png'
import icon3 from './img/24-hours.png'


export const FooteVideo = (
    <Grid item md={9} xs={12} sm={12} className='footerVideoContainer' container style={{margin:'0 auto'}}>
        <Grid>
           <img src={icon1} alt='user'/> <span>Trusted by 100+ users</span>
        </Grid>
        <Grid>
            <img src={icon2} alt='user'/> <span>Video Documentation</span>
        </Grid>
        <Grid>
            <img src={icon3} alt='user'/> <span>24/7 Chat Support</span>
        </Grid>
    </Grid>
);