import ffmetadata from 'ffmetadata'

export const extractMetadataFrom = (path) => {
  // Read song.mp3 metadata
  ffmetadata.read(path, function(err, data) {
      if (err) console.error("Error reading metadata", err)
      else console.log(data)
  })
}
