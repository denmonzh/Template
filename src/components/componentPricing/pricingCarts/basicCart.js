import Grid from "@material-ui/core/Grid/Grid";
import React, {Component} from "react";
import '../style/stylePricing.css'


class BasicCart extends Component{

    render(){
        const {data} = this.props;
        const {dataBasic} = this.props;
        return(
            <Grid item container md={12}>
                <Grid item md={8} xs={8} sm={8}>
                    {
                        data.map((itemInfo, index) => (
                            <Grid key={index} container className='textPriceCarts'>
                                <Grid>
                                    <span>{itemInfo}</span>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid item md={4} xs={4} sm={4}>
                    {
                        dataBasic.map((item, index) => (
                            <Grid key={index} container className='textPriceCarts'>
                                <span>{item}</span>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        )
    }
}

export default BasicCart;




