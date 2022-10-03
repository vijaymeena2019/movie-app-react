import React, {Component} from 'react';
import Items from './items';
import Navbar from './navbar';
import Movies from './movies';
import {getMovies} from './movie services/fakeMovieService';
import paginate from './utils/paginate';
import {getGenres} from './movie services/fakeGenreService';
import _ from 'lodash';



class App extends Component {
    constructor () {
        super();
        this.state = {
            products: [{id:0,quantity:0},{id:1,quantity:0},{id:2,quantity:0}],
            moviesData: [],
            pageSize: 4,
            currentPage: 1,
            genresData: [],
            currentGenre: { _id: '', name: "All Genres"},   // orinal did not mention it // Do we set new property to state via this.setState?
           // selectedGenre: { _id: '', name: "All Genres"},
            short: '',
            
            shortColumn: { path: 'title', order: 'asc'}  // using lodash // sort while page load
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
       
        this.setState({currentPage : updatedPage})
        // this.handlePagination();

    }

    componentDidMount () { // Orignally We initallise these via backend servieces 
        const genresData =  [{ _id: "",name: 'All Genres'}, ...getGenres()]
        this.setState({ moviesData: getMovies(), genresData: genresData})
    }

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

    // not used 
    // handlePaginateAndGenres = () => {   //="All Genres"
    //     // paginate
    //     if (this.state.currentGenre === "All Genres"){
    //         const data = paginate(this.state.moviesData, this.state.currentPage, this.state.pageSize);
    //         console.log(data);
    //         return data;
    //     }


    //     // filtered data
    //     const moviesData = [...this.state.moviesData];
    //     const data2 = moviesData.filter(movie => movie.genre.name === this.state.currentGenre);
    //     console.log(data2)
    //     return data2;  
    // }

    handleCurrentGenre = dataGenre => {

        const currentGenre = dataGenre;
        this.setState({currentGenre, currentPage:1 })  // added this in other way method currentPage: 1
    }

    handleShort = shortColumn => {
        this.setState({shortColumn});
        // console.log('handleShort',data)
     //   this.setState({ short: data, currentGenre: 'Action'})
    //  if (path === this.state.shortColumn.path && this.state.shortColumn.order === "asc") {
    //     this.setState({ shortColumn: { path, order:'desc'}})
    //  }
    //  else this.setState({ shortColumn: { path, order:'asc'}})
       
    }

    
    // handleShortContent = () => {
    //     console.log('in Switch');
    //     switch (this.state.short) {
           
    //         case "Title":
    //             console.log('in Switch');
    //             const title = this.state.moviesData.map(data=> data.title)
    //             console.log('title without sort', title)
    //             title.sort();
    //             console.log('title sort',title);
    //             const short = this.state.moviesData.map((data,index) => {
    //                 console.log("map index",index)
    //                 for(let i=0; i< this.state.moviesData.length ; i++) {
    //                     console.log('loop index', i)
    //                     if (title[index] === this.state.moviesData[i].title){
    //                         console.log('condition true',title[index], this.state.moviesData[i].title)
    //                         console.log('return', this.state.moviesData[i])
    //                         return this.state.moviesData[i];
    //                     }
    //                 }
    //             } )
    //             console.log('short',short)
    //             return short;
    //         case "Rate":
    //             console.log('in Rate')
    //             break;
    //         case "Stock":
    //             break;
    //         case "Genre":
    //             break;
    //     }

    // }

    getPagedData = () => {
        // optinal way
        // filtered.length used in Paginate element 

        const filtered = this.state.currentGenre && this.state.currentGenre._id ? this.state.moviesData.filter(movie => movie.genre.name === this.state.currentGenre.name) : this.state.moviesData;
        console.log('filtered', filtered)

        // sort 
        const sorted =  _.orderBy(filtered,[this.state.shortColumn.path],[this.state.shortColumn.order] )    // input, array of property name, array of sort order
        // paginateFilteredMovies used in rendering data in movies component
        const paginateFilteredMovies = paginate(sorted, this.state.currentPage, this.state.pageSize);;
        console.log("paginateFilteredMovies",paginateFilteredMovies);
        // console.log('filtered',filtered)
        // console.log("selectedGenre", paginateFilteredMovies)

        // const filteredMovies = paginate(this.state.moviesData, this.state.currentPage, this.state.pageSize);  // here we use const not let because it will render again and again and all the time new refreashed const is created

        return { totalCount: filtered.length , data: paginateFilteredMovies, filtered: filtered}
    }

    

    render () {

        const {totalCount, data, filtered} = this.getPagedData();
        // filter > sort > paginate


        
        
        return (
            <div>
                
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
        
                < Movies 
            //    moviesData = {this.state.currentGenre === "All Genres" ? this.state.moviesData : this.state.moviesData.filter(movie => movie.genre.name === this.state.currentGenre.name)}
                moviesData = {filtered}
             
            //    filteredMoviesData = {this.state.currentGenre === "All Genres" ? paginate(this.state.moviesData, this.state.currentPage, this.state.pageSize) : this.handleShortContent()}//this.state.moviesData.filter(movie => movie.genre.name === this.state.currentGenre)}   //{filteredMovies}
                filteredMoviesData = {data}


                onMovieDelete = {this.handleMovieDelete} // compulsary
                onPageChange = {this.handlePageChange} // compulsary
                onLike = {this.handleLike} // compulsary
                pageSize = {this.state.pageSize}  // compulsary
                currentPage = {this.state.currentPage} // compulsary
                genresData = {this.state.genresData}  // compulsary
                onGenres = {this.handleCurrentGenre}  // compulsary
                currentGenre = {this.state.currentGenre}   // compusory
                onShort = {this.handleShort}
                shortColumn= {this.state.shortColumn}
                />
            </div>
        )
    }
}

export default App;