import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/discribeStyle.css'

import explorerImg from './img/Border.png'



export const ImageDescribe = (
    <Grid item md={6} sm={12} xs={12} className='imgDescribe'>
        <Grid>
            <img src={explorerImg} alt='explorerImg'/>
        </Grid>
    </Grid>
);