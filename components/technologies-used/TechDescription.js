import React from 'react'

const TechDescription = ({text, icon}) => {
  return (
    <p className='flex justify-between px-2 my-2 text-sm'>
        <span>{ text }</span>
        <span>{ icon }</span>
    </p>
  )
}

export default TechDescription