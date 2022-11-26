import React from 'react'

const SimpleButton = props => {
  return (
    <button className='
      text-[orange]
      border border-orange
      px-12'  
      onClick={props.onClick}>{ props.children }</button>
  )
}

export default SimpleButton