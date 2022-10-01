


const GroupList = ({genresData, onGenres, currentGenre}) => {
    console.log(currentGenre);
    return (
    <ul className="list-group m-2">
        <li onClick={()=>onGenres({name:'All Genres'})} className={currentGenre==='All Genres' ? "list-group-item active" : "list-group-item"}>All Genres</li>
        {genresData.map(genre=> <li key={genre._id} onClick={()=>onGenres(genre)} className={currentGenre === genre.name ? "list-group-item active" : "list-group-item"}>{genre.name}</li>)}
  </ul>)
}

export default GroupList;