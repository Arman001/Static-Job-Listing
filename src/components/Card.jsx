import React from 'react'

const Card = () => {
  return (
    <div className="p-6 m-5 mt-12 bg-white flex flex-col rounded-lg gap-3 md:flex-row md:justify-between md:items-center">
            <div id="jobInfo" className="md:flex md:flex-row gap-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 -mt-14 md:mt-0 md:w-20"
              />

              <div>
                <h2 className="text-lg font-bold text-desaturatedDarkCyan">
                  Shortly
                </h2>
                <h3 className="text-lg font-bold">Junior Developer</h3>
                <div>
                  <ul className="flex flex-row list-disc space-x-5 text-darkGrayishCyan">
                    <li className="list-none">2w ago</li>
                    <li>Full Time</li>
                    <li>UK Only</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-t-1 border-gray-500 my-4 md:hidden" />
            {/* tags */}
            <div className="flex flex-row flex-wrap gap-6">
              <span className="max-w-fit h-10 p-2 bg-lightGrayishCyan2 text-desaturatedDarkCyan font-bold text-lg text-center">
                Backend
              </span>
            </div>
          </div>
  )
}

export default Card