import { startSong } from '../actions/songs'

export default ({ dispatch, getState }) => next => action => {
  // nextSong => currentQueue.shift -> currentlyPlaying
  switch(action.type) {
    case "NEXT_SONG":
      const songId = getState().currentQueue[0]
      if(songId)
        dispatch(startSong(getState().songs.all[songId]))
      break
    case "PREV_SONG":
      // const song = getState().reverseQueue[0]
      // if(song)
      //   dispatch(startSong(getState().songs[songId]))
      console.log("previous song not implemented yet")
      break
  }

  return next(action);
};
