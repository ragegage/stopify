import React from 'react'

export default ({ seconds }) => {
  seconds = parseInt(seconds)
  if(!seconds && seconds !== seconds) //NaN
    return (<span></span>)
  let s = seconds % 60
  if (s < 10)
    s = `0${s}`
  let m = Math.floor(seconds / 60)
  return <span>{m}:{s}</span>
}
