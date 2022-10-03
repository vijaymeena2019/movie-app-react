// import {Component} from 'react';
import React from 'react';
// import Movie from './movie';
import Pagination from './pagination';
// import Like from './like';
import GroupList from './groupList';
import MoivesTable from './moviesTable';


// class Movies extends Component {
    // constructor () {
    //     super()
    //     this.state = getMovies();   
    // }
    // componentDidMount () {
    //     console.log('componentDidMount')
    // }
    // render () {
        // console.log(this.props.moviesData)

const Movies = ({shortColumn, currentGenre, genresData, onGenres, filteredMoviesData, moviesData, onMovieDelete, onPageChange, onLike, pageSize, currentPage, onShort}) =>{

        return (
            <div className="row">
                
                <div className='col-2'>
                <GroupList currentGenre={currentGenre} onGenres={onGenres} genresData={genresData}/>
                </div>
                <div className='col'>
                <strong>{`Total Movies Available ${moviesData.length ? moviesData.length: 'No Movies Avalilabe'}`}</strong>

                <MoivesTable shortColumn={shortColumn} onShort={onShort} onLike={onLike} onMovieDelete={onMovieDelete} filteredMoviesData={filteredMoviesData}/>
                <Pagination genresData={genresData} itemsCount={moviesData.length} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage}/>
                </div>
            </div>
        )
            }
    // }
            // }


export default Movies;