import Like from './common/like';
import React,{Component} from 'react';
// import TableHeader from './tableHeader';
// import TableBody from './tableBody';
import Table from './common/table.jsx';
import {Link} from 'react-router-dom';
import { getCurrentUser } from '../services/userService';

// column: array
// onSort : function
// shortColumn: object


class MoivesTable extends Component {
    
    // raiseSort = (path) => {
    //     const shortColumn = this.props.shortColumn;
    //     if (path === shortColumn.path && shortColumn.order === "asc") {
    //         this.props.onShort({ path, order:'desc'})
    //      }
    //      else this.props.onShort({ path, order:'asc'})
    // }
    
    getColumns () {
        console.log(getCurrentUser());
        const  {isAdmin} = getCurrentUser() || ""  ; // getCurrentUser() do  not have isAdmin it will gives empty string and is it has getCurrentUser()
        console.log('isAdmin', isAdmin);
        if (isAdmin) {
            return  [  {path:'title',
                            label: "Title",
                            content: movieData =><Link to={`/movies/${movieData._id}`}>{movieData.title}</Link>
                        },
                       {path:'genre.name', label: "Genre"},
                       {path:'numberInStock', label: "Stock"},
                       {path:'dailyRentalRate', label: "Rate"},
                       { content:  movieData => <Like like={movieData.like} onClick={()=>this.props.onLike(movieData)}/>}, // like button
                       { content: movieData => <button onClick={()=> this.props.onMovieDelete(movieData)} className='btn btn-danger m-2'>Detele</button>} // delete button
                   ]
        }

        return [  {path:'title',
                    label: "Title",
                    content: movieData =><Link to={`/movies/${movieData._id}`}>{movieData.title}</Link>
                },
                   {path:'genre.name', label: "Genre"},
                   {path:'numberInStock', label: "Stock"},
                   {path:'dailyRentalRate', label: "Rate"},
                   { content:  movieData => <Like like={movieData.like} onClick={()=>this.props.onLike(movieData)}/>}, // like button
                //    { content: movieData => <button onClick={()=> this.props.onMovieDelete(movieData)} className='btn btn-danger m-2'>Detele</button>} // delete button
               ]
       

        }
    

    // columns = [  {path:'title',
    //  label: "Title",
    //   content: movieData =><Link to={`/movies/${movieData._id}`}>{movieData.title}</Link>},
    //             {path:'genre.name', label: "Genre"},
    //             {path:'numberInStock', label: "Stock"},
    //             {path:'dailyRentalRate', label: "Rate"},
    //             { content:  movieData => <Like like={movieData.like} onClick={()=>this.props.onLike(movieData)}/>}, // like button
    //             { content: movieData => <button onClick={()=> this.props.onMovieDelete(movieData)} className='btn btn-danger m-2'>Detele</button>} // delete button
    //         ]
    
    
    
    render () {
        const { filteredMoviesData, onLike, onMovieDelete, onShort, shortColumn} = this.props
        const columns = this.getColumns();
    return (
        < Table data={filteredMoviesData} columns={columns} onShort= {onShort} shortColumn= {shortColumn}/>
        
        
        // <table className="table table-hover">


        // {/* <TableHeader columns={this.columns} onShort= {onShort} shortColumn= {shortColumn}/>
        // <TableBody data={filteredMoviesData} columns={this.columns}/> */}
        
        
        
        // {/* <thead>
        // <tr>
        // <th onClick={()=>this.raiseSort("title")}>Title</th>
        // <th onClick={()=>this.raiseSort("genre.name")}>Genre</th>
        // <th onClick={()=>this.raiseSort("numberInStock")}>Stock</th>
        // <th onClick={()=>this.raiseSort("dailyRentalRate")}>Rate</th>
        // <th />
        // <th />
        // </tr>
        // </thead> */}
    //     {/* <tbody>
    //     { filteredMoviesData.map((movieData) => (
    //         <tr key={movieData._id}>
    //         <td className ='p-1'>{movieData.title}</td>
    //         <td>{movieData.genre.name}</td>  
    //         <td className='p-2'>{movieData.numberInStock}</td>
    //         <td >{movieData.dailyRentalRate}</td>
    //         <td>
    //             <Like like={movieData.like} onClick={()=>onLike(movieData)}/>
    //         </td>
    //         <td><button onClick={()=> onMovieDelete(movieData)} className='btn btn-danger m-2'>Detele</button></td>
    //     </tr>
    //     ))    
    //     }
    //     </tbody> */}
    // // </table>
    );
}
}


export default MoivesTable ;