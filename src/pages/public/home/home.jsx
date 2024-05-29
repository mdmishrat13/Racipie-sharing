import React from 'react'
import HeroSection from '../../../components/universal/heroSection'
import Product from '../../../components/universal/Product'
import Accordion from '../../../components/universal/Accordion'

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="p-8 text-center">
        <h1 className='text-2xl font-bold p-8'>Hot Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map(product => <Product key={product} />)}
        </div>
      </div>
      <div className="p-8">
      <Accordion/>
      </div>
    </>

  )
}

export default Home