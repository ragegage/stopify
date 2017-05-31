import { startSong } from '../actions/songs'

export default ({ dispatch, getState }) => next => action => {
  // nextSong => currentQueue.shift -> currentlyPlaying
  switch(action.type) {
    case "NEXT_SONG":
      const song = getState().currentQueue[0]
      if(song)
        dispatch(startSong(song))
      break
  }

  return next(action);
};
