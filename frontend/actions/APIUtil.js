export const fetchSongs = () => (
  fetch('http://localhost:3000/songs', { method: 'GET', mode: 'cors'})
    .then(res => res.json())
)

export const fetchArtists = () => (
  fetch('http://localhost:3000/artists')
    .then(res => res.json())
)

export const fetchAlbums = () => (
  fetch('http://localhost:3000/albums')
    .then(res => res.json())
)
