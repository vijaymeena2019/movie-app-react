import React, {Component} from 'react';
import Input from '../components/common/input';
import Joi from 'joi-browser';
import Form from '../components/common/form'



class LoginForm extends Form {

    // as of rule of thumb , whenever you  are building forms, we should initialze the property of the state object,
    // either to an empty string or some value that you have get from server
    // null and undefined considered as uncontrolled component in react

    state = {
        data : { username:"", password: ''}
        ,
        errors : {}
        // ,
        // notAllowedChar: [" ","%","&","*"]  // self made object for validation
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label("Password")
    }

    doSubmit = () => {

        // Call the server
        console.log('form submitted')
    
    
        }

        render () {
            return (
                <React.Fragment>
                <div>
                    <h1>Login</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                {this.renderInput('username',"Username",'text')}
                {this.renderInput('password',"Password", 'password')}
                {this.renderButton("Login")}
                </form>
                {/* <Input type="text" error = {this.state.errors.username} value={this.state.data.username} label="Username" name="username" onChange={this.handleChange}/> */}
                
                {/* <Input type="password" error = {this.state.errors.password} value={this.state.data.password} label="Password" name="password" onChange={this.handleChange}/> */}
               
             
              

                {/* <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    // ref={this.password} 
                    value={this.state.data.password}
                    name = "password"
                    onChange = {this.handleChange}
                    id="password" type="password" className="form-control" />
                    </div> */}
    
                    
                </React.Fragment>
    
    )
    }
    }
    export default LoginForm;
    

    // username = React.createRef();  //  this will  create ref object  // we should minimize the use  of ref
    // password = React.createRef();

    // componentDidMount () { // when our component did mount we want username field to get focus.
    //     this.username.current.focus();
    // }

    // validateForm = () => { // reuseable is we follow convention name data // validate entire form
    //     const options = {abortEarly:false}
    //     const {error} = Joi.validate(this.state.data, this.schema, options)  // object that  we want to validate, schema
    //     if (!error) return null;

    //     const errors = {};

    //     // by mosh
    //     for(let item of error.details){
    //         errors[item.path[0]] = item.message
    //     }
    //     return errors
    //     // by self
    //     // result.error.details.map(detail => {
    //     //     errors[details.path[0]] = detail message
    //     // })
        
        
    //     // const {data} = this.state
    //     // if(data.username.trim() === "") {
    //     //     errors.username = "Username is required"
    //     // }
    //     // if(data.password.trim() === "") {
    //     //     errors.password = "Password is required"
    //     // }
    //     // return Object.keys(errors).length === 0 ? null : errors;
    // }

    // handleSubmit = event => { 

    //     event.preventDefault();   // it will reload page

    //     const errors = this.handleValidate();
    //     // console.log(errors);
    //     this.setState({errors: errors || {}})
    //     if(errors) return ; // it will return errors it self 
    //     // {
    //     //    return errors.username ? errors.username : errors.password
    //     // }

    //     // Call the server
    //     console.log('form submitted')

    //     // try to access dom - works - but will not use

    //     //const getusername = document.querySelector('#username').value; // works but  // In react we should newer work with document.object. Because the hole point of react is to put an abtraction over document object model(DOM)
    //     //console.log('DOM username',getusername);



    //     // const username = this.username.current.value;
    //     // const password = this.password.current.value;
    //     // console.log('username', username);
    //     // console.log('password', password);
    // }

   

    // validateProperty = ({name, value}) => {   // validate one target

    //     //  const errors = this.state.notAllowedChar.filter(char => target.value.includes(char))
    //     //  return errors.length ? errors : null;
    //       // if (target.value.includes(" %") && target.name === 'username') console.log('it has space or %')
  
    //       // // by mosh
    //       // if(target.name === 'username'){
    //       //   if(target.value.trim() === "") return 'Username is Required';
    //       // }
    //       // if(target.name === 'password'){
    //       //     if(target.value.trim() === "") return 'Password is Required';
    //       //   }
          
    //     //   const obj = {};
    //     //   obj[name] = value;
    //     //   console.log(obj)

    //     const obj = { [name]: value}  // [name]:value computed properties in es6
    //     const schema = {[name]: this.schema[name]}
    //     const {error} = Joi.validate(obj, schema);
        
    //     return error ?  error.details[0].message : null ;
        
    //   }

  



    




   
    
    
    
    
    