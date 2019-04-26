import './App.css'

import React, { Component } from 'react'
import Stories from 'react-insta-stories'

class App extends Component {
  render () {
    return (
      <Stories 
        stories={stories}
        defaultInterval={3000}
        // width={432}
        // height={768}
        cta={{ link: 'https://rbe.zaviaerp.com/?zbe_hotel_id=225', text: 'Book now' }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    )
  }
}

const stories = [
  { url: 'https://drive.google.com/uc?id=17bX1fD5oJVCyeG_HQLa2T9h5LQTbw7s8', title: 'A romantic evening', contentText: 'Book now and get the lowest rate in the market guaranteed', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=13Y3tfWe1qCeM1-hfNxwOXde8Xd40Nao7', title: 'Relax and enjoy', contentText: 'Book now and get the lowest rate in the market guaranteed', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=1vbJNLJllAe21ZPXPvzsc-FQihAAh-Svk', title: 'Delicious food', contentText: 'Book now and get the lowest rate in the market guaranteed', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://scontent.cdninstagram.com/vp/049bf995d2c7dbd42208f2b3e28a2c5c/5CC47BFB/t50.2886-16/50250549_477971242607824_6483986026531389440_n.mp4?_nc_ht=scontent.cdninstagram.com', type: 'video', duration: 1000, header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
]

export default App
