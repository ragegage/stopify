import { combineReducers } from 'redux'

import Songs from './Songs'
import Albums from './Albums'
import Artists from './Artists'
import CurrentArtist from './CurrentArtist'
import CurrentAlbum from './CurrentAlbum'
import CurrentlyPlaying from './CurrentlyPlaying'
import CurrentQueue from './CurrentQueue'
import Search from './Search'
import Playlists from './Playlists'
import CurrentPlaylist from './CurrentPlaylist'

const RootReducer = combineReducers({
  songs: Songs,
  albums: Albums,
  artists: Artists,
  currentArtist: CurrentArtist,
  currentAlbum: CurrentAlbum,
  currentlyPlaying: CurrentlyPlaying,
  currentQueue: CurrentQueue,
  search: Search,
  playlists: Playlists,
  currentPlaylist: CurrentPlaylist,
})

export default RootReducer


// state = {
//   songs: {
//     all: {
//       1: {
//         id: 1,
//         title: "Backseat Freestyle",
//         artist: "Kendrick Lamar",
//         album: "good kid maad city",
//         length: 257,
//         plays: 17609,
//         created_at: "5/19/2017 11:58pm"
//       }
//     },
//     byId: [1] // <-- set
//   },
//   albums: {
//     all: {
//       1: {
//         id: 1,
//         title: "good kid maad city",
//         img_src: "maad.png",
//         date: "1/1/2011",
//         song_ids: [1]
//         // associated with list of songs - they get updated at the same time
//       }
//     },
//     byId: [1] // <-- set
//   },
//   artists: {
//     all: {
//       1: {
//         id: 1,
//         name: "Kendrick Lamar"
//       }
//     },
//     byId: [1] // <-- set
//   },
//   currentArtist: {
//     id: 1,
//     name: "Kendrick Lamar",
//     img_src: "kendrick.png",
//     featured_song_ids: [1],
//     featured_album_ids: [1]
//     // associated with lists of songs and albums:
//       // they all get updated at the same time
//   },
//   currentAlbum: {
//     id: 1,
//     name: "good kid maad city",
//     img_src: "maad.png",
//     date: "1/1/2011",
//     song_ids: [1]
//     // associated with list of songs - they both get updated at the same time
//   },
//   currentlyPlaying: {
//     id: 1,
//     title: "Backseat Freestyle",
//     artist: "Kendrick Lamar",
//     length: 257
//   },
//   currentQueue: [{
//     id: 1,
//     title: "Backseat Freestyle",
//     artist: "Kendrick Lamar",
//     length: 257
//   }]
// }
