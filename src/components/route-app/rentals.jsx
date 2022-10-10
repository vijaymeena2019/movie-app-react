import React from "react";


const Rentals = ({match}) => {
    //word.charAt(0).toUpperCase()
 // + word.slice(1)
    return (
        <h1>{match.params.rentals.charAt(0).toUpperCase() + match.params.rentals.slice(1)}</h1>
    );
}

export default Rentals;