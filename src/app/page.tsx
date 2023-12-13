import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Categories/>
      <Event/>
    </main>
  )
}
