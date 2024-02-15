import React from 'react'
import DrunkenMonkey from './sections/drunken-monkey'
import Officialvideos from './sections/official-videos'
import Aboutus from './sections/about-us'
import Classical from './sections/classical'
import Theband from './sections/the-band'
import Footer from './sections/footer'
import Copyright from './sections/copyright'

const Main = () => {
  return (
    <div>
      <DrunkenMonkey />
      <Officialvideos />
      <Aboutus />
      <Classical />
      <Theband />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Main