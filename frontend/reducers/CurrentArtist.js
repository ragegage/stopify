const currentArtist = {
  id: 1,
  name: "Kendrick Lamar",
  img_src: "kendrick.png",
  featured_song_ids: [1],
  featured_album_ids: [1]
  // associated with lists of songs and albums:
    // they all get updated at the same time
}


export default (state = currentArtist, action) => {
  switch(action.type) {
    case "TEST":
      return "test"
    default:
      return state
  }
}
