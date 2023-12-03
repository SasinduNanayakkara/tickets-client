import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import React from 'react'

function EventsPage() {
  return (
    <main>
      <Slider/>
      <Categories/>
      <Event/>
    </main>
  )
}

export default EventsPage