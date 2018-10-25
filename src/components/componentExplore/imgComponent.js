import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/explorerStyle.css'

import explorerImg from './img/Border.png'



export const ImageExplorer = (
    <Grid item md={6} sm={12} xs={12} className='imgExplorer'>
        <Grid>
            <img src={explorerImg} alt='explorerImg'/>
        </Grid>
    </Grid>
);