import http from "../../services/httpService";
import config from '../../config/config.json'; // getting erorr while destructing it



export function getMovies() {
  return http.get(config.apiUrl + "/movies");
}

export function getMovie(id){
  return http.get(config.apiUrl + '/movies/' + id)
}

export function saveMovie(movie) {
  if(movie._id) {
    const movieClone = {...movie};
    delete movieClone._id;
    return http.put(config.apiUrl + "/movies/" + movie._id, movieClone);
  } 
  // else return Promise.reject("movie is not exist");
  return http.post(config.apiUrl + "/movies", movie)
}


export function deleteMovie(id) {
  return http.delete(config.apiUrl + "/movies/" + id);
}
