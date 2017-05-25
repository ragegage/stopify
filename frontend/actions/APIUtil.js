export const fetchSongs = () => (
  fetch('http://localhost:3000/songs')
    .then(res => res.json())
)

export const fetchArtists = () => (
  fetch('http://localhost:3000/artists')
    .then(res => res.json())
)

export const fetchArtist = (id) => (
  fetch(`http://localhost:3000/artists/${id}`)
    .then(res => res.json())
)

export const fetchAlbums = () => (
  fetch('http://localhost:3000/albums')
    .then(res => res.json())
)

export const fetchAlbum = (id) => (
  fetch(`http://localhost:3000/albums/${id}`)
    .then(res => res.json())
)

export const searchAPI = (query) => (
  fetch(`http://localhost:3000/search/${query}`)
    .then(res => res.json())
)

export const postSong = song => (
  fetch('http://localhost:3000/songs', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(song)
  })
    .then(res => res.json())
)
