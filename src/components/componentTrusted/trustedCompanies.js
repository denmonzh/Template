import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/trustedStyle.css'



import Companies_1 from './img/1.png'
import Companies_2 from './img/2.png'
import Companies_3 from './img/3.png'
import Companies_4 from './img/4.png'




export const TrustedCompanies = (
    <Grid item container md={10} sm={8} xs={8} className='companiesContainer' style={{margin:'0 auto'}}>
        <Grid md={2} sm={4} xs={8} item>
            <img src={Companies_1} alt='comp1'/>
        </Grid>
        <Grid md={2} sm={4} xs={8} item className='spaceBetweenCompanies'>
            <img src={Companies_2} alt='comp2'/>
        </Grid>
        <Grid md={2} sm={4} xs={8} item className='spaceBetweenCompanies'>
            <img src={Companies_3} alt='comp3'/>
        </Grid>
        <Grid md={2} sm={4} xs={8} item className='spaceBetweenCompanies'>
            <img src={Companies_4} alt='comp4'/>
        </Grid>
    </Grid>
);

