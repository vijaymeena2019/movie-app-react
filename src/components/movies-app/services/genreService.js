import http from "../../services/httpService";
import config from '../../config/config.json';


export function getGenres () {
  // console.log(fetch("http://localhost:3000/api/genres"));
  // console.log(fetch("http://localhost:3000/api/genres").then(res => res.json()));
  // console.log(http.get("http://localhost:3000/api/genres"));
  return http.get(config.apiUrl + '/genres')
}

// export function getGenres () {
//     return fetch("http://localhost:3000/api/genres");
//   }

// export async function getGenres () {
//     const res = await fetch("http://localhost:3000/api/genres")
//     const genres = await res.json();
//     return genres;
//   }