import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/explorerStyle.css'



import iconOne from './img/2-layers.png'
import iconTwo from './img/icon2.png'


export const ExploreMainContent = (
    <Grid item container md={5} sm={12} xs={12} className='contentExplorer'>
        <Grid className='explorerText'>
            <h2>Explore the awesomeness</h2>
        </Grid>
        <Grid style={{height:'30px'}}>
            <Grid className='shape'>
            </Grid>
        </Grid>
        <Grid className='textExplorer'>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </span>
        </Grid>
        <Grid className='mainContainerInfo' container>
            <Grid container item md={1} sm={1} xs={2} style={{paddingTop:'10px'}}>
                <img src = {iconOne} alt='icon1'/>
            </Grid>
            <Grid  style={{flexDirection:'column'}}  item md={11} sm={11} xs={10}>
                <Grid>
                    <span className='titleTextInfo'>Easy to Customize</span>
                </Grid>
                <Grid style={{paddingTop:'10px'}} className='textExplorer'>
                    <span>
                        Lorem lean startup ipsum product market fit customer development
                        acquihire technical cofounder.
                    </span>
                </Grid>
            </Grid>
        </Grid>
        <Grid className='mainContainerInfo' container>
            <Grid container item md={1} sm={1} xs={2} style={{paddingTop:'30px'}}>
                <img src = {iconTwo} alt='icon1'/>
            </Grid>
            <Grid  style={{flexDirection:'column'}}  item md={11} sm={11} xs={10}>
                <Grid>
                    <span className='titleTextInfo'>Quality Design</span>
                </Grid>
                <Grid style={{paddingTop:'10px'}} className='textExplorer'>
                    <span>
                        Lorem lean startup ipsum product market fit customer development
                        acquihire technical cofounder.
                    </span>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);


