import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../style/styleFeautures.css'

import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'

export const FeauturesCartsHead = (
        <Grid item md={10} className='headCartContainer'>
            <Grid style={{textAlign:'center'}} item md={6} xs={12}>
                <Grid >
                    <img src={img1} alt='img1'/>
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
                    <img src={img2} alt='img1'/>
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
                    <img src={img3} alt='img1'/>
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