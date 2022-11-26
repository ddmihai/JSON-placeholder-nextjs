import React from 'react'

const UserDetailLayout = props => {
  return (
    <div className='p-10
    bg-blackTransparent
    max-w-md
    basis-96
    flex-1
    border
    flex 
    flex-col 
    mt-[10%]
    h-fit
    md:mr-auto
    mr-6 
    '>{ props.children }</div>
  )
}

export default UserDetailLayout