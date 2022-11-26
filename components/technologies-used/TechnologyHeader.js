import React from 'react'

const TechnologyHeader = ({ text, icon }) => {
  return (
    <h3 className='flex justify-between items-center px-2 py-3'>
        <span>{ text }</span>
        <span>{ icon }</span>
    </h3>
  )
}

export default TechnologyHeader