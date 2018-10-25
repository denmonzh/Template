import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core/Grid';
import './style/styleScreenShots.css'


import screen_1 from './img/Screen_1.png'
import screen_2 from './img/Screen_2.png'
import screen_3 from './img/Screen_3.png'

class ScreenShotsProduct extends Component {
    render() {

        return (
            <Grid className='screenShootsContainer' item md={12} xs={12} sm={12}>
                <Carousel  showThumbs={false}
                           emulateTouch
                           width={'700px'}
                >
                    <div>
                        <img src={screen_1} alt='screen1'/>
                        <p className="legend">Screen1</p>
                    </div>
                    <div>
                        <img src={screen_2} alt='screen2' />
                        <p className="legend">Screen2</p>
                    </div>
                    <div>
                        <img src={screen_3} alt='screen3'/>
                        <p className="legend">Screen3</p>
                    </div>
                </Carousel>
            </Grid>
        );
    }
}

export default ScreenShotsProduct;