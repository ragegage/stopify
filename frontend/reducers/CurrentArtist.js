const currentArtist = {
  id: 1,
  name: "Kendrick Lamar",
  img_src: "kendrick.png",
  featured_song_ids: [],
  featured_album_ids: []
  // associated with lists of songs and albums:
    // they all get updated at the same time
}


export default (state = currentArtist, action) => {
  switch(action.type) {
    case "RECEIVE_ARTIST":
      return action.payload
    default:
      return state
  }
}
