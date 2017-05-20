const albums = {
  all: {
    1: {
      id: 1,
      title: "good kid maad city",
      img_src: "maad.png",
      date: "1/1/2011",
      song_ids: [1]
      // associated with list of songs - they get updated at the same time
    }
  },
  byId: [1] // <-- set
}


export default (state = albums, action) => {
  switch(action.type) {
    case "TEST":
      return "test"
    default:
      return state
  }
}
