const artists = {
  all: {
    1: {
      id: 1,
      name: "Kendrick Lamar",
      img_src: ''
    }
  },
  byId: [1] // <-- set
}


export default (state = artists, action) => {
  switch(action.type) {
    case "TEST":
      return "test"
    default:
      return state
  }
}
