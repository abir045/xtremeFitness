import React from 'react'
//import bg3 from '../assets/img/bg3.jpg';
import bg4 from '../assets/img/bg4.jpg';

const About = () => {
    return (
        <div>
            <section className="relative py-20 bg-black">
          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" 
              data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={bg4}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4
              "
              data-aos="fade-left">
                <div className="md:pr-12">
                  
                  <small className="text-orange-500">About our gym</small>
                  <h3 className="text-4xl text-white uppercase font-bold">
                   Safe Body Building
                  </h3>
                  <p className="mt-4 text-lg text-white leading-relaxed ">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className=" font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-dumbbell fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl text-white">
                            The latest and greatest gym equipment
                          </h4>
                        </div>
                      </div>
                    </li>
                     <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className=" font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-hard-hat fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl text-white">
                            6-inch, quality foam floor padding
                          </h4>
                        </div>
                      </div>
                    </li>
                      <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className=" font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-users fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl text-white">
                          3 professional trainers
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        </div>
    )
}

export default About
