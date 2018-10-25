import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/footerStyle.css'


import Logo from './img/LandX.png'

import iconFB from './img/facebook-logo.png'
import iconTW from './img/twitter-logo-button.png'
import iconPS from './img/pinterest-logotype-circle.png'
import iconGP from './img/google-plus-logo-button.png'
import iconINS from './img/instagram-photo-camera-logo-outline.png'
import iconLK from './img/linkedin-logo.png'

export const Footer = (
    <Grid item container md={12} sm={12} xs={12} className='footerMainContainer'>
        <Grid md={10} sm={10} xs={10} item container className='containerFooter'>
            <Grid>
                <img src={Logo} alt='Logo'/>
            </Grid>
            <Grid style={{paddingTop:'23px', textAlign:'center'}}>
                <span className='footerText'>©2014 LandX Template LLC. </span>
            </Grid>
            <Grid style={{paddingTop:'19px', width:'200px', justifyContent:'space-around'}} container>
                <img src = {iconFB} alt='FB'/>
                <img src = {iconTW} alt='TW'/>
                <img src = {iconPS} alt='PS'/>
                <img src = {iconGP} alt='GP'/>
                <img src = {iconINS} alt='INS'/>
                <img src = {iconLK} alt='LK'/>
            </Grid>
        </Grid>
    </Grid>
);