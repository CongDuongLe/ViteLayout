import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="xl:absolute xl:-top-32 mb-8 ">
              <div className="">
                <h1 className="my-2 text-slate-200 font-bold text-2xl">
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p className="my-2 text-slate-200">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
            <button
             
            className="animate-bounce  sm:w-full lg:w-auto my-2 border rounded md py-3 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-5 xl:mt-16 mt-8">
              <Link to='/'>
              Go Back
              </Link>
            </button>
          </div>
        </div>
        <div className='hidden xl:block'>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
}

export default NotFound