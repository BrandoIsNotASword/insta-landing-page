import './App.css'

import React, { Component } from 'react'
import Stories from 'react-insta-stories'

class App extends Component {
  render () {
    return (
      <Stories 
        stories={stories}
        defaultInterval={300000}
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
  { url: 'https://drive.google.com/uc?id=1uQpubWdh8eIUqKmFFK-1bVfgIqdjrV_t', title: 'A romantic evening', contentText: 'Enjoy a romantic and fun day in one of the best boutique places of Tulum.', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=1TlxSi3NZ-pw8ZSGBqQv8TietTr8AaYTF', title: 'Relax and enjoy', contentText: 'Rest and enjoy the sun of tulum while you drink a delicious drink in our pool.', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } }, 
  { url: 'https://drive.google.com/uc?id=18vdnmrRUvHHo3T6MJ0PrEuKNzfKiQHt_', title: 'Delicious food', contentText: 'Have a romantic dinner and enjoy delicious Mexican food in our restaurant.', header: { heading: 'Prana Boutique Hotel', subheading: 'TULUM, MÉXICO', profileImage: 'https://pranahoteltulum.com/wp-content/uploads/2018/04/logo.png' } },
]

export default App
