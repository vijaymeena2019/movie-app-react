import React, { Component } from 'react';
import { logout } from './movies-app/services/userService';


class Logout extends Component {
    componentDidMount () {
        logout();
        window.location = "/";
    }
    render () {
        return null;
    }
}

export default Logout;
