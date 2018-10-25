import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import {Logo} from './components/header/logoComponent'
import {Info} from './components/header/infoComponent'
import HeadForm from './components/header/formComponent'
import RegisterNow from './components/header/registerNow'

import {ImageExplorer} from './components/componentExplore/imgComponent'
import {ExploreMainContent} from './components/componentExplore/contentComponent'


import {ImageDescribe} from './components/componentDescribe/imgComponent'
import {DescribeMainContent} from './components/componentDescribe/contentComponent'

import {titleFeatures} from './components/componentFeautures/titleFeatures'
import {MainCart} from "./components/componentFeautures/index";


import {titlePricing} from "./components/componentPricing/titlePricing";
import FirstPricingCart from './components/componentPricing/index'

import {TitleVideo} from "./components/videoComponent/titleVideo";
import {Video} from "./components/videoComponent/videoIndex";
import {FooteVideo} from './components/videoComponent/footerVideoComponent'

import {TitleScreenShots} from "./components/productScreenShotsComponent/titleScreenShots";
import ScreenShotsProduct from './components/productScreenShotsComponent/mainProductScreenShots'

import {TrustedTitle} from './components/componentTrusted/trustedTitle'
import {TrustedCompanies} from './components/componentTrusted/trustedCompanies'
import {trustedBlocks} from "./components/componentTrusted/trustedBlocks";

import {getStarted} from "./components/getStartedComponent";

import {GetQuestion} from "./components/questionsComponent";

import {Footer} from "./components/footer";

class App extends Component {
    render() {
        return (
            <Grid>
                <Grid className='mainHeaderContainer' container item>
                    {Logo}
                    {Info}
                    <HeadForm/>
                    <RegisterNow/>
                </Grid>
                <Grid item container>
                    {ImageExplorer}
                    {ExploreMainContent}
                </Grid>
                <Grid className='describeProductContainer' item container>
                    {DescribeMainContent}
                    {ImageDescribe}
                </Grid>
                <Grid item container>
                    {titleFeatures}
                    {MainCart}
                </Grid>
                <Grid className='mainPriceCarts'>
                    {titlePricing}
                    <FirstPricingCart/>
                </Grid>
                <Grid>
                    {TitleVideo}
                    {Video}
                    {FooteVideo}
                </Grid>
                <Grid className='screenShootMainContainer'>
                    {TitleScreenShots}
                    <ScreenShotsProduct/>
                </Grid>
                <Grid>
                    {TrustedTitle}
                    {TrustedCompanies}
                    {trustedBlocks}
                </Grid>
                <Grid className='getStarted'>
                    {getStarted}
                </Grid>
                <Grid>
                    {GetQuestion}
                </Grid>
                <Grid className='footer'>
                    {Footer}
                </Grid>
            </Grid>
        );
    }
}

export default App;
