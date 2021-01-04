import React, { Component } from 'react'
import {FormUserDetails} from '../FormUserDetails/FormUserDetails'
import FormPersonalDetails from '../FormPersonalDetails/FormPersonalDetails' 
import Confirm from '../Confirm/Confirm'
import Success from '../Success/Success'

export class UserForm extends Component {
    state={
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    //Proceed to next step
    nextStep = () =>{
        const {step} = this.state
        this.setState({
            step: step+1
        })
    }
    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step-1
        })
    } 

    //handle fields change
    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }
    
    render() {
        const {step,firstName,lastName,email,occupation,city,bio} = this.state
        const values = {firstName,lastName,email,occupation,city,bio}

        switch (step) {
            case 1:
                return(
                    <FormUserDetails 
                        nextStep={this.nextStep} 
                        handleChange={this.handleChange} 
                        values={values} 
                    />)
            case 2:
                return( 
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}  
                        prevStep={this.prevStep}  
                    />)
            case 3:
                return(
                    <Confirm 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}  
                        prevStep={this.prevStep}  
                    />)    
            case 4:
                return (
                    <Success 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}  
                        prevStep={this.prevStep}    
                    />)    
        
            default:
                console.log('This is a multistep form build with react')
        }
    }
}
