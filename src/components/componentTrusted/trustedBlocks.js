import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/trustedStyle.css'

import trustedBlock from './img/block.svg'

export const trustedBlocks = (
    <Grid item container md={12} sm={12} xs={12} style={{paddingTop: '80px', justifyContent: 'center'}}>
        <Grid item container md={10} sm={10} xs={10} style={{paddingTop: '80px', justifyContent: 'center'}}>
            <Grid item md={4} sm={12} xs={12}
                  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Grid className='textBlock'>
                    <span className='textBlockStyle'><i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloremque laboriosam mollitia nobis officia sint. Ad aliquid
                        ex facere id ipsam itaque labore, praesentium, repellendus
                        repudiandae sequi suscipit velit vero voluptate.</i>
                    </span>
                </Grid>
                <Grid>
                    <img src={trustedBlock} alt='trustedCompanies'/>
                </Grid>
                <Grid
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Grid className='footerTextTrusted'>
                        Willeke Hoekstra
                    </Grid>
                    <Grid style={{paddingTop: '10px'}} className='textBlockStyle'>
                        AbZ Network
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} sm={12} xs={12}
                  className='spaceBetween'
                  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} >
                <Grid className='textBlock'>
                    <span className='textBlockStyle'><i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloremque laboriosam mollitia nobis officia sint. Ad aliquid
                        ex facere id ipsam itaque labore, praesentium, repellendus
                        repudiandae sequi suscipit velit vero voluptate.</i>
                    </span>
                </Grid>
                <Grid>
                    <img src={trustedBlock} alt='trustedCompanies'/>
                </Grid>
                <Grid
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className='spaceBetween'>
                    <Grid className='footerTextTrusted'>
                        Răducu Neamțu
                    </Grid>
                    <Grid style={{paddingTop: '10px'}} className='textBlockStyle'>
                        AbZ Network
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} sm={12} xs={12}
                  style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Grid className='textBlock'>
                    <span className='textBlockStyle'><i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloremque laboriosam mollitia nobis officia sint. Ad aliquid
                        ex facere id ipsam itaque labore, praesentium, repellendus
                        repudiandae sequi suscipit velit vero voluptate.</i>
                    </span>
                </Grid>
                <Grid>
                    <img src={trustedBlock} alt='trustedCompanies'/>
                </Grid>
                <Grid
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Grid className='footerTextTrusted'>
                        <span>Markel Díaz</span>
                    </Grid>
                    <Grid style={{paddingTop: '10px'}} className='textBlockStyle'>
                        AbZ Network
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);