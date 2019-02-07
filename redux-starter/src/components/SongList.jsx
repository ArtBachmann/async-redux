import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {

  // Create new helper method to return song list in JSX.
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      )
    })
  }

  render() {

    return (

      <div className="ui divided list">
        {this.renderList()}
      </div>

    )
  }
}

const mapStateToProps = (state) => { // state is all data in Store
  // pull out list of songs from state (gets new state every time component re-renderes)
  console.log(state)
  return {
    songs: state.songs
  }
}

// Action creator (selectSong) as an object can also be imported with connect helper function
export default connect(
  mapStateToProps, {
    selectSong: selectSong
  })(SongList)

// connect() is the outer function calling inner function 
// with parameter (SongList)
