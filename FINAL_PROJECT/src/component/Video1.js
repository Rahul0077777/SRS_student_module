import React from 'react'
import vid from '../component/Video/p.mp4'

function Video1() {
  return (
    <video autoPlay loop muted>
        <source src={vid}/>
    </video>
  )
}

export default Video1
