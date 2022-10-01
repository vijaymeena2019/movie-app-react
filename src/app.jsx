import React, {Component} from 'react';
import Items from './items';
import Navbar from './navbar';
import Movies from './movies';
import {getMovies} from './movie services/fakeMovieService';
import paginate from './utils/paginate';
import {getGenres} from './movie services/fakeGenreService';



class App extends Component {
    constructor () {
        super();
        this.state = {
            products: [{id:0,quantity:0},{id:1,quantity:0},{id:2,quantity:0}],
            moviesData: getMovies(),
            pageSize: 4,
            currentPage: 1,
            genresData: getGenres(),
            currentGenre: "All Genres"
        }
    }

    
    

    handleSum = () => {
    let sum = 0
    for ( let i=0; i< this.state.products.length; i++){
        sum += this.state.products[i].quantity;
    }
    return sum;   
}

// event handler

    handleIncrease = (item) =>{    
    // how it is evaluate (this.state.qty >= 0) // getting false // not working {qty: this.state.qty++} 
            const products = [...this.state.products];
            const index = products.indexOf(item);
            products[index] ={...item};
            products[index].quantity++;
            this.setState({products})  // because name of property and value is  same es6
        }
        
    handleDecrease = (item) => {
    if (item.quantity > 0) {
            const products = [...this.state.products];
            const index = products.indexOf(item);
            products[index] = {...item};
            products[index].quantity--;
            this.setState({products:products});
        }
    }

    handleReset = () => {
        const products = this.state.products.map(product => {
            product.quantity = 0;
            return product;
    });
        this.setState({products})
    }

    handleDetele = (item) => {
        const products = [...this.state.products];
        const index = products.indexOf(item);
        products.splice(index,1)
        this.setState({products:products})
    }

    handleMovieDelete = movieData => {
        console.log('in handlemovie delete')
        
        const moviesData = [...this.state.moviesData];
        const index = moviesData.indexOf(movieData)
        moviesData.splice(index,1);
        this.setState({moviesData})
    }

    handlePagination = () => {
        const {moviesData, currentPage, pageSize} = this.state;
    // const copyItems = [...moviesData];
    const filteredItems = [];
    for(let i=(pageSize * (currentPage-1)); i < (pageSize*currentPage < moviesData.length ? pageSize*currentPage : moviesData.length); i++ ){
        filteredItems.push(moviesData[i]);   // if i have change it with new object it will gives error when finding its index no.
    }
    return filteredItems;
}

    handlePageChange = (updatedPage) => {
        console.log(updatedPage);
        this.setState({currentPage : updatedPage})
        // this.handlePagination();

    }

    // componentDidMount () {
    //     this.handlePagination();
    // }

    handleLike = movieData => {

        const moviesData = [...this.state.moviesData];
        const index = moviesData.indexOf(movieData)
        // console.log(index);
        moviesData[index] = {...moviesData[index]};
        // moviesData[index].like = moviesData[index].like ? false : true ;
        moviesData[index].like = !moviesData[index].like;
        // console.log('changed like',moviesData[index].like)
        // console.log('orignal like',this.state.moviesData[index].like)
        this.setState({ moviesData })
    }

    handleGenres = () => {   //="All Genres"
        if (this.state.currentGenre === "All Genres"){
            const data = paginate(this.state.moviesData, this.state.currentPage, this.state.pageSize);
            console.log(data);
            return data;
        }

        // const currentGenre = genre.name;
        const moviesData = [...this.state.moviesData];
        const data2 = moviesData.filter(movie => movie.genre.name === this.state.currentGenre);
        console.log(data2)
        return data2;  
    }

    handleCurrentGenre = dataGenre => {

        const currentGenre = dataGenre.name;
        console.log(currentGenre);
        this.setState({currentGenre})
    }

    

    render () {

        // const filteredMovies = paginate(this.state.moviesData, this.state.currentPage, this.state.pageSize);  // here we use const not let because it will render again and again and all the time new refreashed const is created
        
        return (
            <React.Fragment>
                {/* <Navbar 
                onTotalItems={this.handleSum} 
                onTotalProducts = {this.state.products.filter(product => product.quantity > 0).length}
                /> */}
                
                {/* <main className="container">
                    <Items onDetele={this.handleDetele} 
                    onReset = {this.handleReset}
                    onIncrease={this.handleIncrease} 
                    onDecrease={this.handleDecrease} 
                    products={this.state.products}
                    />
                </main>   */}
                {/* {console.log('before console for filtered data')}
                {console.log(this.state.filteredMoviesData)} */}
                < Movies 
                moviesData = {this.state.currentGenre === "All Genres" ? this.state.moviesData : this.handleGenres()}
                // filteredMoviesData = {this.handlePagination()}
                filteredMoviesData = {this.handleGenres()}   //{filteredMovies}
                onMovieDelete = {this.handleMovieDelete}
                onPageChange = {this.handlePageChange}
                onLike = {this.handleLike}
                pageSize = {this.state.pageSize}
                currentPage = {this.state.currentPage}
                genresData = {this.state.genresData}
                onGenres = {this.handleCurrentGenre}
                currentGenre = {this.state.currentGenre}
                />
            </React.Fragment>
        )
    }
}

export default App;