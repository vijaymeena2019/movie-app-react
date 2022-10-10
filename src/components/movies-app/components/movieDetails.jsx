
import React from "react";


function MovieDetails ({match, history}) {
  // handleSave = () => {
  //   // Navigate to /products
  //   this.props.history.push('/movies');
  //   //this.props.history.push('/products');  // save back history
  //   //this.props.history.replace('/products')  // no back history
  // };

  
    return (
      <div>
        <h1>Movie Id -{match.params.id} </h1>
        <button onClick={()=>history.push("/movies")}>Save</button>   
        {/* why we can not use handleSave() here? i was getting errors */}
      </div>
    );
  
}

export default MovieDetails;

// import React from "react";

// function renderDetails (history) {

//     history.push('/movies');
    

// }


// const MoviesDetails = ({history,match}) => {
//     return (
//         <div>
//         <h1>Movie Id  is - {match.params.id}</h1>
//         <button onClick={renderDetails(history)}>Save</button>
//         </div>
//     )
// }

// export default MoviesDetails;
