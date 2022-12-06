import React from 'react';
import Form from '../../common/form';
import Joi from 'joi-browser';
import { getGenres } from '../services/genreService';
import { getMovie, saveMovie } from '../services/movieService';
import { toast } from 'react-toastify';


class MovieForm extends Form {
    state = {
      data: {
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: ""
      },
      genres: [],
      errors: {}
    };
  
    schema = {
      _id: Joi.string(),
      title: Joi.string()
        .required()
        .label("Title"),
      genreId: Joi.string()
        .required()
        .label("Genre"),
      numberInStock: Joi.number()
        .required()
        .min(0)
        .max(100)
        .label("Number in Stock"),
      dailyRentalRate: Joi.number()
        .required()
        .min(0)
        .max(10)
        .label("Daily Rental Rate")
    };

    async populateGenres() {
      const { data:genres } = await getGenres();
      this.setState({ genres });
    }

    async populateMovie() {
      try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const { data: movie} = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
      }
      catch (ex) {
        if (ex.response && ex.response.status === 400) this.props.history.replace("/not-found");
      }
    }
  
    async componentDidMount() {
      await this.populateGenres();
      await this.populateMovie();
    }
  
    mapToViewModel(movie) {
      return {
        _id: movie._id,
        title: movie.title,
        genreId: movie.genre._id,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate
      };
    }
  
    doSubmit = async () => {
      console.log(this.state.data) 
      try {
        await saveMovie(this.state.data);
        this.props.history.push("/movies");
      }
      catch (ex) {
        if (ex.response && ex.response.status === 400) toast("getting 400 error")
      }
    };
  
    render() {
      return (
        <div>
          <h1>Movie Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderSelect("genreId", "Genre", this.state.genres)}
            {this.renderInput("numberInStock", "Number in Stock", "number")}
            {this.renderInput("dailyRentalRate", "Rate")}
            {this.renderButton("Save")}
          </form>
        </div>
      );
    }
  }
  
  export default MovieForm;

// class MovieForm extends Form {

//     state = {
//         data: {
//             title:"",
//             numberInStock:"",
//             dailyRentalRate:"",
//             genreId:""
//         },
//         genres: [],
//         errors:{}
//     } 
 


//     // componentDidMount () {
//     //     console.log("this.props in did mount",this.props)
//     //     // console.log("props in did mount",props)
//     // }
    
//     // genre:{comedy:false, action:false, thriller:false},
//     schema = {
//         _id: Joi.string(),  // required not  used because we do not  know the value of id
//         title: Joi.string().required().label("Title"),
//         genreId: Joi.string().required().label('Genre'),
//         numberInStock: Joi.number().min(1).max(100).required().label("Number In Stock"),
//         dailyRentalRate: Joi.number().min(1).max(10).required().label("Daily Rental Rate")
//     }

//     componentDidMount () {
//         const genres = getGenres();
//         this.setState({genres})  // why  this is not going to be infinite loop
        
//         const movieId = this.props.match.params.id;
//         if (movieId === 'new') return ;

//         const movie = getMovie(movieId);
//         if(!movie) return this.props.history.replace("/not-found");

//         this.setState({ data: this.mapToViewModel(movie)});
//     }

//     mapToViewModel(movie) {
//         return {
//             _id: movie._id,
//             title: movie.title,
//             genreId: movie.genre._id,
//             numberInStock: movie.numberInStock,
//             dailyRentalRate: movie.dailyRentalRate
//         };
//     }

 

//     doSubmit = () => {
//         saveMovie(this.state.data);

//         this.props.history.push("/movies");




//         // console.log('this.props do submit',this.props)
//         // // call server
//         // console.log('form submitted')
//         // // if we get genre data
//         // // let genre = {}
//         // let newData = {...this.state.data,like:false,_id:this.state.data.title};
//         // for(let item of this.props.genresData){
//         //     console.log("loop",item)
//         //     if (item.name === newData.genre) {
//         //         newData.genre = {_id:item._id, name:item.name}
//         //         break;
//         //     } 
//         // }
//         // // newData.genre = genre;
//         // // const newwData = {...newData,like:false,_id:this.state.data.title};
//         // this.props.onAddMovie(newData);

//         // // const data.genre = genre;
//         // this.props.history.push("/movies")
//     }


//     // componentDidUpdate (prevProps,prevState,snapshot) {
//     //     console.log('componentDidUpdate props',this.props)
//     //     const newData2 = this.props.moviesData.filter(data=> data._id === this.props.match.params.id)
//     //     console.log('newData2',newData2)
//     //     if (newData2.length) {
//     //     this.setState({data: {title: newData2[0].title , 
//     //         dailyRentalRate: newData2[0].dailyRentalRate, 
//     //         numberInStock: newData2[0].numberInStock, 
//     //         genre: newData2[0].genre}})
//     //     }

//     // }


    

//     render () {
//        //const newData2 = this.props.moviesData.filter(data=> data._id === this.props.match.params.id)

//        return (

//         <React.Fragment>
//             <h1>Movie Addition Form</h1>
//             <form onSubmit={this.handleSubmit}>
//             {this.renderInput('title','Title')}
//             {this.renderInput('numberInStock',"Number In Stock",'number')}
//             {this.renderInput('dailyRentalRate',"Rate")}
//             {this.renderSelect("genreId", "Genre", this.state.genres)}
//             {/* {this.renderSelect("genreId","Genre", this.state.genres)} */}
//             {this.renderButton("Save")}
//             </form>
//             </React.Fragment> )
// }
// }

// export default MovieForm;
// {/* <div className="form-group"> 
// <label htmlFor='genre'> Select Genre </label> 
// <select id="genre" className="form-control" >  
// <option> ---Choose Genre--- </option>  
// <option> Action </option>  
// <option> Thriller </option>  
// <option> Comedy </option>  
// </select> 
// </div>  */}

            
