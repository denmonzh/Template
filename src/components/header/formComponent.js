import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './style/headerStyle.css'
import {Button} from 'react-bootstrap'


class HeadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onChangeName:'Your Name',
            onChangePhone: 'Phone Number',
            onChangeEmail:'Your E-Mail',
            resultInfo:[],
            getFromInputInfo:[]
        }
    }

    handleOnChangePhone(event){
        this.setState({
            onChangePhone: event.target.value
        })
    }

    handleOnChangeEmail(event){
        this.setState({
            onChangeEmail: event.target.value
        })
    }

    handleOnChangeName(event){
        this.setState({
            onChangeName: event.target.value
        })
    }

    handleClick(){
        const {onChangePhone} = this.state;
        const {onChangeEmail} = this.state;
        const {onChangeName} = this.state;
        const {resultInfo} = this.state;
        resultInfo.push(onChangeEmail, onChangePhone, onChangeName);
        this.setState({
            onChangeEmail: '',
            onChangePhone:'',
            onChangeName: ''
        });
    }




    render() {
        const {onChangePhone} = this.state;
        const {onChangeEmail} = this.state;
        const {onChangeName} = this.state;

        return (
            <Grid item container md={12} sm={12} xs={12} className='maimFromContainer'>
                <Grid className='FormContainer' md={8} sm={8} xs={8} item>

                </Grid>
                <Grid className='containerActions' md={8} sm={8} xs={8} item>
                    <Grid md={2} sm={2} xs={2} item >
                        <input
                            className='inputForm'
                            value = {onChangeName}
                            onChange={this.handleOnChangeName.bind(this)}
                        />
                    </Grid>
                    <Grid md={2} sm={2} xs={2} item>
                        <input
                            className = 'inputForm'
                            value = {onChangeEmail}
                            onChange={this.handleOnChangeEmail.bind(this)}
                        />
                    </Grid>
                    <Grid md={2} sm={2} xs={2} item>
                        <input
                            className='inputForm'
                            value = {onChangePhone}
                            onChange = {this.handleOnChangePhone.bind(this)}
                        />
                    </Grid>
                    <Grid md={2} sm={2} xs={2} item>
                        <Button className='buttonForm'>
                            <span
                                className='buttonText'
                                onClick={this.handleClick.bind(this)}>Get started</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}


export default HeadForm;