import fetch from 'isomorphic-fetch';

export const apiUrl = 'http://swapi.co/api';

export const getMovies = () =>
  fetch(apiUrl)
  .then(res => res.json())
  .then(data => data.movies);


export const getPeople = () =>
  fetch(`${apiUrl}/people`)
    .then(res => res.json())
    .then(data => data.results);