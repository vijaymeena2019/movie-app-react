// import Like from './like';
import _ from 'lodash';
import React from 'react';
//import {Link} from 'react-router-dom';
function renderCell (item, column) {
    if (column.content) return column.content(item)

    return _.get(item, column.path)

}

export default function TableBody ({data, columns}) {
    
    return (
        <tbody>
            {data.map((item,index) => <tr key={index}>
                {columns.map((column,index) => <td key={index}>{renderCell(item,column)}</td>)}
                {/*my solution <td key={index}>{column.path === "title" ? <Link to= {`/movies/${item._id}`}>{renderCell(item,column)}</Link> : renderCell(item,column)}</td>)} */}
                {/* item[column.path] works for simple properties and not works for genre.name or nested properties, so we use lodash _.get(object, target property(that can be nested)) */}
                {/* {<td></td>}    <td> is based on how  many number of column we have, so we need to provide column information */}
            </tr>
            )}


        {/* { filteredMoviesData.map((movieData) => (
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
        } */}
        </tbody>
    )
}