import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './style/stylePricing.css'

import BasicCart from './pricingCarts/basicCart'
import UltimateCart from './pricingCarts/ultimateCart'
import PremiumCart from './pricingCarts/premiumCart'

class FirstPricingCart extends Component {
    constructor(props) {
        super(props);
        this.state={
            infoForPrice: ['Total Users', 'Unlimited Styles', 'Advance Protection', 'Cloud Storage', '24/7 Customer Service', 'Backup Service'],
            basic: ['15', '✓', '✓', '✗', '✗', '✗'],
            premium:['35', '✓', '✓', '✓', '✓', '✗'],
            ultimate: ['60', '✓', '✓', '✓', '✓', '✓']
        }
    }

    render() {
        const {infoForPrice} = this.state;
        const {basic} = this.state;
        const {premium} = this.state;
        const {ultimate} = this.state;

        return (
            <Grid item md={12} sm={12} xs={12} className='pricingCartsMainContainer'>
                <Grid item md={10} xs={10} sm={10} container style={{paddingTop: '70px'}}>
                    <Grid className='contentCartPriceContainer' item md={4} xs={12} sm={12} container>
                        <Grid className="firstPriceCart">
                            <Grid className='headPriceCartBlack' container>
                                <Grid style={{paddingTop: '25px'}}>
                                    <span className='titleCartPrice'>Basic</span>
                                </Grid>
                                <Grid style={{paddingTop: '15px'}}>
                                    <span className='priceInfoText'>From <span style={{color: '#0199e6'}}>$99</span> per month</span>
                                </Grid>
                            </Grid>
                            <BasicCart
                                data = {infoForPrice}
                                dataBasic = {basic}
                            />
                            <Grid  container className='footerPriceCart'>
                                <Grid >
                                    <span className='priceMonthText'>$99 Per Month</span>
                                </Grid>
                                <Grid>
                                    <button className='singUpPriceButtonWhite'>SING UP</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className='contentCartPriceContainer' container item md={4}  xs={12} sm={12}>
                        <Grid className="firstPriceCart">
                            <Grid className='headPriceCartBlue' container>
                                <Grid style={{paddingTop: '25px'}}>
                                    <span className='titleCartPrice'>Premium</span>
                                </Grid>
                                <Grid style={{paddingTop: '15px'}}>
                                    <span className='priceInfoText'>From $199 per month</span>
                                </Grid>
                            </Grid>
                            <PremiumCart
                                data = {infoForPrice}
                                dataPremium = {premium}
                            />
                            <Grid  container className='footerPriceCart'>
                                <Grid >
                                    <span className='priceMonthText'>$99 Per Month</span>
                                </Grid>
                                <Grid>
                                    <button className='singUpPriceButtonBlue'>SING UP</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className='contentCartPriceContainer' container item md={4}  xs={12} sm={12}>
                        <Grid className="firstPriceCart">
                            <Grid className='headPriceCartBlack' container>
                                <Grid className='headPriceCartBlack' container>
                                    <Grid style={{paddingTop: '25px'}}>
                                        <span className='titleCartPrice'>Ultimate</span>
                                    </Grid>
                                    <Grid style={{paddingTop: '15px'}}>
                                        <span className='priceInfoText'>From <span
                                            style={{color: '#0199e6'}}>$299</span> per month</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <UltimateCart
                                data = {infoForPrice}
                                dataUltimate = {ultimate}
                            />
                            <Grid  container className='footerPriceCart'>
                                <Grid >
                                    <span className='priceMonthText'>$99 Per Month</span>
                                </Grid>
                                <Grid>
                                    <button className='singUpPriceButtonWhite'>SING UP</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default FirstPricingCart