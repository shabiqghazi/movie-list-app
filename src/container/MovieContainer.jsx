import axios from 'axios';
import React, { Component } from 'react'
import MovieComp from '../component/MovieComp/MovieComp'

export default class MovieContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies : []
    }
  }
  componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2228e5ee06b6fcf7d1fd20aea9c24914&language=id-ID&region=ID`)
    .then((res) => {
      this.setState({movies: res.data.results})
      // console.log(this.state.movies)
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="mb-5 text-center">Popular Movies</h2>
        <div className="card-group row">
          {this.state.movies.map(movie => <MovieComp key={movie.id} movieId={movie.id} title={movie.title} imgpath={movie.poster_path} vote={movie.vote_average} />)}
        </div>
      </div>
    )
  }
}
