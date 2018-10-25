import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/questionStyle.css'

import iconEmail from './img/email.png'

export const GetQuestion = (
    <Grid item container md={12} sm={12} xs={12} className='questionMainContainer'>
        <Grid md={10} sm={10} xs={10} item container className='containerQuestion'>
            <Grid>
                <span className='questionText'>Have any question or need help?</span>
            </Grid>
            <Grid style={{paddingTop:'23px', textAlign:'center', height:'80px'}}>
                <a style={{textDecoration:'none'}} href="mailto:"><img src={iconEmail} alt='Email'/><span className='contactText'> CONTACT US NOW</span></a>
            </Grid>
        </Grid>
    </Grid>
);