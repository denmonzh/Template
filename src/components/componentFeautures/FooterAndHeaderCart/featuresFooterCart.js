import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../style/styleFeautures.css'

import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'

export const FeauturesCartsFooter = (
    <Grid item md={10} className='headCartContainer' style={{paddingTop:'70px'}}>
        <Grid style={{textAlign:'center'}} item md={6} xs={12}>
            <Grid >
                <img src={img4} alt='img1'/>
            </Grid>
            <Grid  className='titleTextFeaturesCart'>
                <span>Responsive Design</span>
            </Grid>
            <Grid style={{paddingTop:'40px'}}>
                <span>Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement.</span>
            </Grid>
        </Grid>
        <Grid style={{textAlign:'center'}} item md={6} xs={12}>
            <Grid >
                <img src={img5} alt='img1'/>
            </Grid>
            <Grid className='titleTextFeaturesCart'>
                <span>1000+ Font Icons</span>
            </Grid>
            <Grid style={{paddingTop:'40px'}}>
                <span>Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement.</span>
            </Grid>
        </Grid>
        <Grid style={{textAlign:'center'}} item md={6} xs={12} >
            <Grid>
                <img src={img6} alt='img1'/>
            </Grid>
            <Grid className='titleTextFeaturesCart'>
                <span>Built with Bootstrap 3.1</span>
            </Grid>
            <Grid style={{paddingTop:'40px'}}>
                <span>Lorem lean startup ipsum product market fit customer development acquihire technical cofounder. User engagement.</span>
            </Grid>
        </Grid>
    </Grid>
);