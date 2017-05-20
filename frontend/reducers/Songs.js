const songs = {
  all: {
    1: {
      id: 1,
      title: "Backseat Freestyle",
      artist: "Kendrick Lamar",
      album: "good kid maad city",
      length: 257,
      plays: 17609,
      created_at: "5/19/2017 11:58pm"
    }
  },
  byId: [1] // <-- set
}

export default (state = songs, action) => {
  switch(action.type) {
    case "RECEIVE_SONGS":
      return action.payload
    default:
      return state
  }
}
