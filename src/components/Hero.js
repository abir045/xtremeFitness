import React from 'react'
import bg2 from '../assets/img/bg2.jpg';
import bg5 from '../assets/img/bg5.jpg';

const Hero = () => {
    return (
        <div>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:  `url(${bg5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' 
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto " data-aos="fade-in" >
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div >
                    <h1 className="text-white font-semibold text-5xl">
                      Welcome to  <span className="text-orange-500">Extreme Fitness</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                     A wonderful place that allows you to pick and choose from a variety of fitness activities on a whim.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
            
        </div>
    )
}

export default Hero
