import React, { Component } from 'react'
import PlaylistComp from '../component/MovieComp/PlaylistComp';
import { connect } from 'react-redux';

class PlaylistContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
        { this.props.playlist < 1 ?
        <h4 className="text-center">Tidak ada playlist</h4>  :
        this.props.playlist.map(list => <PlaylistComp key={list.id} id={list.id} homepage={list.homepage} poster_path={list.poster_path} title={list.title} genres={list.genres} />) }
        </div>
      </div>
    )
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

export default connect(mapStateToProps)(PlaylistContainer)