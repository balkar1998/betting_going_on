import React from 'react'

const Dropdown = ({league}) => {
  return (
    <>
    {league?.response?.map((item) => {
        return (
          <a key={item.league.id} className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-gray-200">
            <span className="mx-4 text-lg font-normal">
              {item.league.name}
            </span>
          </a>
        )
      })}
      </>
  )
}

export default Dropdown