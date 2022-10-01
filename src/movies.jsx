// import {Component} from 'react';
import React from 'react';
// import Movie from './movie';
import Pagination from './pagination';
import Like from './like';
import GroupList from './groupList';


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

const Movies = ({currentGenre, genresData, onGenres, filteredMoviesData, moviesData, onMovieDelete, onPageChange, onLike, pageSize, currentPage}) =>{

        return (
            <React.Fragment>
            <strong>{`Total Movies Available ${moviesData.length ? moviesData.length: 'No Movies Avalilabe'}`}</strong>
            <GroupList currentGenre={currentGenre} onGenres={onGenres} genresData={genresData}/>
            <table className="table table-hover">
                <thead>
                <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
                </tr>
                </thead>
                <tbody>
                { filteredMoviesData.map((movieData) => (
                    <tr key={movieData._id}>
                    <td className ='p-1'>{movieData.title}</td>
                    <td>{movieData.genre.name}</td>  
                    <td className='p-2'>{movieData.numberInStock}</td>
                    <td >{movieData.dailyRentalRate}</td>
                    <td>
                        <Like like={movieData.like} onClick={()=>onLike(movieData)}/>
                    </td>
                    <td><button onClick={()=> onMovieDelete(movieData)} className='btn btn-danger m-2'>Detele</button></td>
                </tr>
                ))    
                }
                </tbody>
            </table>
            <Pagination genresData={genresData} itemsCount={moviesData.length} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage}/>
            </React.Fragment>
        )
            }
    // }
            // }


export default Movies;