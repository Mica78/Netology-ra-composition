

import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const card = {
    title: 'Card Title',
    text: 'Card text',
    href: 'https://netology.ru/',
    btnTitle: 'Go to Netology',
    width: '20rem',
    src: [
      "https://u.netology.ru/backend/uploads/legacy/program_families/image/2788/vitrina_ONECMID.png",
      "https://u.netology.ru/backend/uploads/legacy/program_families/image/376/vitrina_PD_1.png"
    ],
  }

  return (
    <React.Fragment>
      <Card {...card}>
        {card.src.map((src) => <img src={src} alt="netology" className="card-img-top"/>)}
      </Card>

      <Card {...card}>

      </Card>
    </React.Fragment>
  )
}

export default App
