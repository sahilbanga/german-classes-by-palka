export const metadata = {
  title: 'German Classes by Palka',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/*<Zigzag />*/}
      <Testimonials />
    </>
  )
}
