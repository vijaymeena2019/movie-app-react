import React, {Component} from 'react';
import Input from './input';
import Joi from 'joi-browser';
import Select from './select';

class Form extends Component {

    // requirement
    //schema
    // data

    // without schema and without state this class works file , why this is not showing any errors of not defleared

    state = {     // ? why  do we need to declear state  here and why empty?  // I have tried works without it
        data : {},
        errors: {}
    };

    // schema is mention in movieForm.jsx

    handleSubmit = event => { 

        event.preventDefault();   // it will stop reload page

        const errors = this.validateForm();
        // console.log(errors);
        this.setState({errors: errors || {}})
        if(errors) return ; // it will return errors it self 

        this.doSubmit()

    }


    handleChange = ({target}) => {
        // console.log('handleChange')
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(target)
        // console.log(errorMessage)
        if (errorMessage) errors[target.name] = errorMessage; 
        else delete errors[target.name] // if we don't get errorMessage. we should delete the existing property. so error is cleared up
        //console.log(...errorMessage, "these char are not allowed in username")
        const data = {...this.state.data};
        data[target.name] = target.value;   // [] when we do not the target property name and we are going  to  work dynamically, we use bracket notation
        this.setState({data, errors});
    }



    validateForm = () => { // reuseable is we follow convention name data // validate entire form
        const options = {abortEarly:false}
        const result = Joi.validate(this.state.data, this.schema, options) // data and schema name should be oky if convention followed // object that  we want to validate, schema
        if (!result.error) return null;

        const errors = {};

        // by mosh  // we can use map also
        for(let item of result.error.details){
            errors[item.path[0]] = item.message
        }
        return errors
    }

    validateProperty = ({name, value}) => { // reuseable  // validate one target

        const obj = { [name]: value}  // [name]:value computed properties in es6
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema);
        
        return error ?  error.details[0].message : null ;
        
      }

    renderButton = (label) => {
        return <button disabled={this.validateForm()} className="btn btn-primary">{label}</button>
    }

    // renderSelect(name, label, options) {
    //     const {data, errors} = this.state

    //     return (
    //         <Select
    //             name = {name}
    //             value = {data[name]}
    //             label = {label}
    //             options={options}
    //             onChange={this.handleChange}
    //             error ={errors[name]}
    //             />
    //     )
    // }


    renderSelect(name, label, options) {
        const { data, errors } = this.state;
    
        return (
          <Select
            name={name}
            value={data[name]}
            label={label}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}
          />
        );
      }

    renderInput = (name, label, type="text") => {
        // console.log('renderInput')
        const {errors, data} = this.state
        return <Input 
        type={type} 
        error = {errors[name]} 
        value={data[name]} 
        label={label}         //{name.charAt(0).toUpperCase()+ name.slice(1)} 
        name={name} 
        onChange={this.handleChange}/>
    }
    
}

export default Form;



    // render () {
    //   //  const {onRiseChange, onSubmit, onValidate, data} = this.props
    //     return (
    //         <form onSubmit={onSubmit}>
    //             <Input type="text" value={data.username} label="Username" name="username" onChange={onRiseChange}/>
    //             <Input type="password" value={data.password} label="Password" name="password" onChange={onRiseChange}/>
               
    //             {/* <div className="form-group">
    //                 <label htmlFor="password">Password</label>
    //                 <input 
    //                 // ref={this.password} 
    //                 value={this.state.data.password}
    //                 name = "password"
    //                 onChange = {this.handleChange}
    //                 id="password" type="password" className="form-control" />
    //                 </div> */}

    //             <button disabled={onValidate()} className="btn btn-primary">Login</button>
    //         </form>
      //  )
   // }
