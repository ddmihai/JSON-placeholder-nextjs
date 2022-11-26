import React from 'react'

const UserInfo = props => {

    
  
return (
    <p className='flex w-full justify-between items-center my-2'>
        <span className='text-[orange] text-sm'>{ props.title }</span>
        {props.icon && <span>{ props.icon }</span>}
    </p>
  )
}

export default UserInfo