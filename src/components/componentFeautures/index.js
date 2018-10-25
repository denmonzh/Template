import React from 'react'
import Grid from '@material-ui/core/Grid';
import './style/styleFeautures.css'


import {FeauturesCartsHead} from './FooterAndHeaderCart/feauturesHeader'
import {FeauturesCartsFooter} from './FooterAndHeaderCart/featuresFooterCart'

export const MainCart = (
    <Grid item container md={12} sm={12} xs={12} className='mainHeadFeaturesCartContainer'>
        {FeauturesCartsHead}
        {FeauturesCartsFooter}
    </Grid>
);