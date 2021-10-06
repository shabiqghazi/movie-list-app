import axios from "axios";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleMovieComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: {},
    };
  }
  componentDidMount() {
    let movieId = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2228e5ee06b6fcf7d1fd20aea9c24914&language=id-ID&region=ID`
      )
      .then((res) => this.setState({ movieDetail: res.data }));
  }
  postToPlaylist(movieDetails){
    this.props.addPlaylist(movieDetails)
  }
  addPlaylist(movieDetails){
    if(this.props.playlist.length > 0){
      for(let i = 0; i < this.props.playlist.length; i++){
        var title1 = this.props.playlist[i].title
        var title2 = movieDetails.title
        if(title1 === title2){
          return false;
        }
      } 
    }
    this.postToPlaylist(movieDetails);
  }
  render() {
    let movieDetails = this.state.movieDetail;
    let genres = [];
    for (var p in movieDetails.genres) {
      genres.push(movieDetails.genres[p]);
    }
    return (
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: '1000px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500//${movieDetails.poster_path}`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movieDetails.title}</h5>
                <p className="card-text">{movieDetails.overview}</p>
                <p className="card-text text-bold">
                  Genre:{" "}
                  {genres.map((genre) => (
                    <small key={genre.id} className="card-text badge bg-success me-1">
                      {genre.name}
                    </small>
                  ))}
                </p>
                <a href={movieDetails.homepage} target="blank" className="btn btn-danger me-2 d-inline-block" target="blank">Tonton</a>
                <button className="btn btn-secondary" onClick={() => this.addPlaylist(movieDetails)}>Tonton nanti</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if(state){
    return {
      playlist : state.list
    }
  } else {
    return {
      playlist : []
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPlaylist: (newValue) => dispatch({type: 'ADD_PLAYLIST', newPlaylist: newValue})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieComp);
