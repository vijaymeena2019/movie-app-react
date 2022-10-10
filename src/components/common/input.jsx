import React from 'react';





const Input = ({name,label,error,...rest}) => { // rest operator // other props is received as ...rest operator 
    return (
        <div className="form-group">
        <label htmlFor={name} >{label}</label>
        <input 
        {...rest}   // spread operator
        id={name}
        name={name}   
        // onChange={onChange}   // bcoz  of rest operatior
        // value={value} 
        // type={type} 
        className="form-control" >
        </input> 
        
        {error && <div className="alert alert-danger">{error}</div>}
        </div>
        )
    

}

export default Input