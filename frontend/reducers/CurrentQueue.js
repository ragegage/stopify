const currentQueue = [{
  id: 1,
  title: "Backseat Freestyle",
  artist: "Kendrick Lamar",
  length: 257
}]

export default (state = currentQueue, action) => {
  switch(action.type) {
    case "TEST":
      return "test"
    default:
      return state
  }
}
