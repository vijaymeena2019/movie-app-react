import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';


class Register extends Form{
    state = {
        data : {
            name : "",
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(5).required().label("Password"),
        name : Joi.string().required().label("Name")
    }

    doSubmit = () => {
        // server call
        console.log('Form has been submitted')
    }

    render () {
        return (
            <React.Fragment>
            <h1>Registration Form</h1>
            <form onSubmit = {this.handleSubmit}>
                {this.renderInput('name',"Name")}
                {this.renderInput('email',"Email")}
                {this.renderInput('password','Password','password')}
                {this.renderButton('Register')}
            </form>


            </React.Fragment>

        )
    }
}

export default Register;


