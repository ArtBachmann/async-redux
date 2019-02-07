// Action creator
// Named export
export const selectSong = (song) => {
  // Return an action //#endregion
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

