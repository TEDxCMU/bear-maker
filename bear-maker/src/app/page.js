// 'use client'

import CharMaker from './charMaker.js'
import Navbar from './components/navbar.js'
import Sparkles from './components/sparkles.js'
// import { useEffect, useState } from 'react'

export default function Home() {
  // let [windowLoaded, setWindowLoaded] = useState(false)

  // useEffect(() => {
  //   setWindowLoaded(true)
  // }, [])
    

  return (
    <>
      {/* {windowLoaded && <Sparkles />} */}
      <Sparkles />
      <Navbar/>
      <CharMaker />
    </>
  )
}
