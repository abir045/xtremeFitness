import React from 'react'

const Trainers = () => {
    return (
        <div>
              <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">
                Meet Our Trainers
                </h2>
                <p className="text-lg leading-relaxed m-4 ">
                  Our trainers are here to dedicate the time and the effort that you need to get in the best shape of your life.
                </p>
              </div>
            </div>

            {/* trainer card wrapper */}
            <div className="flex flex-wrap">
                {/* card 1 */}
              <div className="w-full md:w-4/12  lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tr1.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                    Md Delwar
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                     Mass Gain 
                    </p>
                   
                  </div>
                </div>
              </div>
              {/* card-2 */}
              <div className="w-full md:w-4/12  lg:mb-0 mb-12 px-4"  data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tr2.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Rishad
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Strengh and Mobility
                    </p>
                   
                  </div>
                </div>
              </div>
              {/* card-3 */}
              <div className="w-full md:w-4/12  lg:mb-0 mb-12 px-4"  data-aos="flip-right">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/tr3.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                     Md Suman
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                     Strengh and Technique
                    </p>
                    
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
            
        </div>
    )
}

export default Trainers
