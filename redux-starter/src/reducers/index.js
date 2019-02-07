import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '3.25' },
    { title: 'Macarooni', duration: '2.25' },
    { title: 'My Way', duration: '3.55' },
    { title: 'Disco Beat', duration: '1.45' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})