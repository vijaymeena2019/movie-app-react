import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { register } from './movies-app/services/userService';


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
        password: Joi.string().min(8).required().label("Password"),
        name : Joi.string().required().label("Name")
    }

    doSubmit = async () => {
        // server call
        try {
            const registerUser = this.state.data;
            await register (registerUser);
            window.location = "/"; // this will reload full page so our app component mounted again 
            toast.success('Form has been sucessfully Registered');
        }
        catch (ex) {
            if(ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.email = ex.response.data;
                this.setState({ errors })
        }
    }
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


