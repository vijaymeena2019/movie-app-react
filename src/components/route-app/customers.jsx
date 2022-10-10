import React from "react";


const Customers = ({match}) => {
    return (
        <h1>{match.params.customers.charAt(0).toUpperCase() + match.params.customers.slice(1)}</h1>
    );
}

export default Customers;