import axios from 'axios';
import {toast} from 'react-toastify'; // toast can be used as function or object 
// import Raven from 'raven-js';
import logger from "./logService";
// import {getJwt} from '../movies-app/services/userService';  // removed

// In our App module we don't care what library we are using to sent http request , we just need to modify here

// Error Handling

// expected errors - api endpoints predect and return . ex- invalid id deletation request (server response 404:not found, 400:bad request(submit form with invalid data)) - client errors (client did something wrong)
// display specific error message
// unexpected errors:- errors that techinally should not happen in normal circumtances
// example : network down, server down, database is down, bug
// We need to handle these error differently
// -- Log them - In future we can see them 
// - Display generic and friendly message to the user

// configation of default headers, so we are telling axios that whenever you  want to send an http request remember to include this header in the request
// we have set headers to include in all kind to http request
// if the user is not loged in it will gives undefined and x-auth-token header is not be set\

// here we have an issue of bi-directional dependencies, it may create pain in future ,we need to get rid of it by single direction
// axios.defaults.headers.common['x-auth-token'] = getJwt();



function setJwt(jwt) {
  console.log(jwt);
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// axios request, response interceptors
axios.interceptors.response.use(null, error => {  //use(f-success, f-error)
    const expectedError = 
      error.response 
      && error.response.status >= 400 
      && error.response.status <500
  
  // by this we handle Unexpected globally
    if (!expectedError) {   // not expectedError means -> unexpected error
        logger.log(error);
      //console.log('Logging the errorn->', error)  // display error log
      toast("An unexpected Error occurred") // alert replace with toast.error or toast as fn
    }
    // it may be expected error -> expectedError - it was handle by our catch block
    // pass control to our (try) catch block
    return Promise.reject(error);   
  }) 

export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    setJwt
};

