import { useRouter } from 'next/router'
import React from 'react'
import SimpleButton from '../simple-button/SimpleButton'
import BasicTitle from '../title/title'

const UsersMainDescription = ({ users }) => {

  const router = useRouter();

  const handleNavigateToUser = id => {
    router.push(`/user-details/${id}`);
  }
    


  return (
    <section className='flex flex-col flex-1 bg-pattern bg-cover'>
      <BasicTitle title='Short description of our users...' />

      <section className='flex [&>article]:flex-1 h-full [&>article]:basis-96 flex-wrap bg-blackTransparent'>
        <article>
          {
            users.map(user => (
              <div key={user.id} className='flex justify-between px-5 py-5 border-orange border-b'>
                <div className='[&>p]:text-[orange]'>
                  <p className='text-xl'>{user.name}</p>
                  <p className='text-sm'>Company: {user.company.name}</p>
                </div>

                <SimpleButton onClick={() =>handleNavigateToUser(user.id)}>Contact</SimpleButton>
              </div>
            ))
          }
        </article>
      </section>
    </section>
  )
}




export default UsersMainDescription