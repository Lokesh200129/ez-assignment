import React from 'react'

import vfilmsLogo from '../assets/hero/vfilmsLogo.svg'
import heroManlada from '../assets/hero/hero-manlada.svg'

const HeroPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center p-4 sm:p-6 pt-20 lg:pt-4">
      {/* Left Column - Logo with Background */}
      <div className="relative h-[50vh] w-full lg:w-1/2 flex justify-center items-center">
        <div
          className='absolute inset-0 bg-contain bg-center bg-no-repeat animate-spin-slow'
          style={{
            backgroundImage: `url(${heroManlada})`
          }}
        />
        <img src={vfilmsLogo} alt="V Films" className="h-20 sm:h-24 lg:h-28 z-10" />
      </div>

      {/* Right Column - Content */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left gap-4 lg:gap-6 p-4 lg:pl-12 lg:pr-20'>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight" style={{ fontFamily: "Island Moments" }}>
          Varnan is where stories find their voice and form
        </h1>
        
        <h3 className="text-[#F15D2B] text-2xl sm:text-3xl lg:text-[40px] my-2 lg:my-4" style={{ fontFamily: "Instrument Sans" }}>
          Films . Brands . Art
        </h3>
        
        <article className="text-sm sm:text-base lg:text-lg max-w-2xl" style={{ fontFamily: "Instrument Sans" }}>
          <p>
            Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn't just tell stories - V honors them.
          </p>
        </article>
      </div>
    </div>
  )
}

export default HeroPage