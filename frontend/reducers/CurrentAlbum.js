const currentAlbum = {
  id: 1,
  name: "good kid maad city",
  img_src: "maad.png",
  date: "1/1/2011",
  song_ids: [1]
  // associated with list of songs - they both get updated at the same time
}


export default (state = currentAlbum, action) => {
  switch(action.type) {
    case "TEST":
      return "test"
    default:
      return state
  }
}
