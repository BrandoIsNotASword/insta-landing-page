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
  { url: 'https://drive.google.com/uc?id=1uQpubWdh8eIUqKmFFK-1bVfgIqdjrV_t', title: 'A romantic evening', contentText: 'Book now and get the lowest rate in the market guaranteed!', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=1TlxSi3NZ-pw8ZSGBqQv8TietTr8AaYTF', title: 'Relax and enjoy', contentText: 'Book now and get the lowest rate in the market guaranteed!', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=18vdnmrRUvHHo3T6MJ0PrEuKNzfKiQHt_', title: 'Delicious food', contentText: 'Book now and get the lowest rate in the market guaranteed!', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } },
]

export default App
