import PropTypes from 'prop-types';


const GroupList = ({textProperty, valueProperty, genresData, onGenres, currentGenre}) => {
    // console.log(currentGenre);
    return (
    <ul className="list-group m-2">
        {genresData.map(genre=> <li key={genre[valueProperty]} onClick={()=>onGenres(genre)} className={currentGenre[textProperty] === genre[textProperty] ? "list-group-item active" : "list-group-item"}>{genre[textProperty]}</li>)}
  </ul>)
}

GroupList.defaultProps = {  // by this we no longer pass these 2 as props when using the groupList
  textProperty: 'name',
  valueProperty: '_id'
}

// GroupList.propTypes = {
//   onGenres : PropTypes.func.isRequired,
//   currentGenre: PropTypes.string.isRequired,
//   valueProperty: PropTypes.string.isRequired,
//   textProperty: PropTypes.string.isRequired,
//   genresData: PropTypes.array.isRequired
// }

export default GroupList;