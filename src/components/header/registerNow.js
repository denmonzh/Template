import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import './style/headerStyle.css'
import registerImg from './img/Shape_5.png'


class RegisterNow extends Component{

    render(){
        return(
            <Grid className='registerNow' md = {12} xs={12} sm={12} item container>
                <Grid item md={8} sm={8} xs={8}  style={{textAlign:'end', paddingTop:'11px'}}>
                    <span className='textRegister'>Register Now and Get FREE Trial</span>
                </Grid>
                <Grid item md={3} sm={3} xs={3} >
                    <img src = {registerImg} alt='register' style={{ paddingLeft:'10px'}}/>
                </Grid>
            </Grid>
        )
    }
}


export default RegisterNow;
