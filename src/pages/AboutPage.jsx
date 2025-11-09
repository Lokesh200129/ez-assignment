import React from 'react';
import cardBg from '../assets/about/team/download.png'
import pin from '../assets/about/team/pin.png'
import indiaGate from '../assets/about/team/indiaGate.svg'
import arrow2 from '../assets/about/team/arrow2.svg'
import people from '../assets/about/team/people.svg'
import arrow3 from '../assets/about/team/arrow3.svg'
import arrow from '../assets/about/team/arrow.svg'
import heading from '../assets/about/us/heading.png'
import frame1 from '../assets/about/us/Frame1.png'
import frame2 from '../assets/about/us/Frame2.png'
import frame3 from '../assets/about/us/Frame3.png'
import mountain from '../assets/about/us/mountain.png'
import group from '../assets/about/us/Group.png'
export default function About() {
  return (
    <>

      <div className="max-h-screen lg:overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            {/* Left Column */}
            <div className="relative mb-16 lg:mb-0" style={{ height: 'calc(100vh - 10rem)' }}>
              {/* Pin and Hanging Card */}
              <div className="relative w-full max-w-md mx-auto">
                <img src={pin} alt="pin" className='absolute -top-25 left-full -translate-x-1/2 h-20 z-70' />
                <div
                  className="absolute mt-8  -top-25 left-4 w-full h-96 p-6 transform -rotate-6 bg-cover bg-center z-60 "
                  style={{ backgroundImage: `url(${cardBg})` }}
                >
                  <p className="font-island  leading-relaxed text-gray-800 p-4 pt-12">
                    Some craft films. Some build brands. Some curate art. We bring it all together – a collective of storytellers driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
                    <br /><br />
                    From first spark to final frame, from raw ideas to timeless visuals – we shape stories that stay with you.
                  </p>
                </div>
              </div>

              {/* Bottom section with India Gate and Branding Experts */}
              <div
                className="relative  flex justify-center items-end gap-4"
              >
                <img src={indiaGate} alt="India gate" className="h-68 absolute top-90 left-0" />
                <div className="flex w-full flex-col items-center mb-4 absolute top-80 left-60">
                  <img src={arrow} alt="arrow" className='h-28 ' />
                  <p className="font-island text-2xl text-gray-700">Branding Experts</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative flex flex-col items-center justify-center mt-12 lg:mt-0">
              <div className="flex items-start justify-center mb-8 w-full relative">
                <div className="text-center -mt-8 -mr-8 absolute top-10 right-85">
                  <p className="font-island text-2xl text-gray-700">Film Makers</p>
                  <img src={arrow2} alt="arrow" className='h-24 pl-18 mx-auto' />
                </div>
                <img src={people} alt="people" className='h-72 z-10  absolute top-40' />
                <div className="text-center -mt-8 -ml-8 absolute top-30 -right-20">
                  <p className="font-island text-2xl text-gray-700">Art Curators</p>
                  <img src={arrow3} alt="arrow" className='h-28 mx-auto' />
                </div>
              </div>

              <div className="text-center mt-16 lg:mt-24 absolute top-90">
                <h2 className="text-2xl  font-serif text-gray-800 mb-8">
                  Take a closer look at the stories V bring to life.
                </h2>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full relative flex flex-col justify-between p-4 sm:p-6 lg:p-12 pt-20 lg:pt-12">

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12 z-10">

          {/* Left Column - Stats and Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center  gap-8 lg:gap-12 ">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center lg:text-left" >
              <img src={heading} alt="Heading" />
            </h2>

            {/* Description Text */}
            <div className="text-sm sm:text-base lg:text-lg text-center lg:text-center max-w-md" style={{ fontFamily: "Instrument Sans" }}>
              <p className="mb-2">Some stories come from the biggest names.</p>
              <p className="mb-2">Others begin with bold, rising voices.</p>
              <p>We've been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center lg:justify-start sm:gap-6">
              <div className="flex items-center">
                <img
                  src={frame1} alt="85+ Projects"
                  className="w-32 sm:w-40 transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-10"
                />
                <img
                  src={frame2} alt="50+ Happy Clients"
                  className="w-32 sm:w-40 transform rotate-1 hover:rotate-0 transition-transform duration-300 -ml-12 z-20"
                />
                <img
                  src={frame3} alt="10+ Experts Team"
                  className="w-32 sm:w-40 transform rotate-3 hover:rotate-0 transition-transform duration-300 -ml-12 z-30"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Quote and Logos */}
          <div className="w-full lg:w-1/2 flex flex-col   gap-8 lg:gap-12">

            {/* Inspirational Quote */}
            <div className="text-3xl sm:text-4xl lg:text-6xl font-normal text-center leading-relaxed lg:-mt-40" style={{ fontFamily: "Island Moments" }}>
              <p>Every project is more than just a brief -</p>
              <p>it's a new chapter waiting to be written.</p>
              <p >Together, we're crafted tales that inspire,</p>
              <p>connect, and endure.</p>
            </div>

          </div>
        </div>

        {/* Client Logos - Positioned over the mountain */}
        <div className="absolute bottom-0 left-225 right-0 flex justify-center items-end z-10 pointer-events-none">
          <img src={group} alt="Client Logos" className='h-72' />
        </div>

        {/* Bottom Decorative Mountain Graphic - Stays in the background */}
        <div
          className="absolute bottom-0 left-150 right-25 h-48 sm:h-64 lg:h-60 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

    </>
  );
}
