import React from "react";
import logo from '../assets/img/logo.jpg';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              }
              
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              <img src={logo} className="shadow rounded-full max-w-full h-auto align-left border-none" />
            </a> */}
            <div className="flex flex-wrap justify-left">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src={logo} className="shadow rounded-full max-w-full h-auto align-left border-none" />
  </div>
</div>
  
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
    
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a target="_blank" 
                  rel="noopener noreferrer"
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-grey-500 text-grey-800"
                      : "text-gray-800 hover:text-orange-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.facebook.com/xtremefitness01/"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg: text-orange-500"
                        : "text-orange-500") +
                      " fab fa-facebook text-orange-500 text-lg leading-lg "
                    }
                  />

                  
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-grey-500 text-gray-500"
                      : "text-gray-800 hover:text-orange-500") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.instagram.com/xtreme_fitness2020/"
                >
                  <i
                    className={
                      (props.transparent
                        ? " text-orange-500"
                        : "text-orange-500") +
                      " fab fa-instagram text-orange-500 text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
