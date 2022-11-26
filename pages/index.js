import Head from 'next/head'
import React from 'react'
import HeroBanner from '../components/hero/hero'
import TechnologiesUsed from '../components/technologies-used/TechnologiesUsed'
import UsersMainDescription from '../components/users-short/users-short'
import { getAllUsers } from '../lib/api-calls'




const HomePage = props => {


  return (
    <section>
       <Head>
        <title>JSON placeholder placeground</title>
        <meta charset="UTF-8" lang='en'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="HTML, CSS, JavaScript nextJS next.js tailwind" />
        <meta name="description" content="Json user detailed tags" />
      </Head>

      <HeroBanner />
      <TechnologiesUsed />

      {/* Render basic ammount of user details */}
      <UsersMainDescription users={props.users} />
    </section>
  )
}


export const getStaticProps = async () => {

  const getUsersList  = await getAllUsers();

  return {
    props: {
      users: getUsersList
    },

    revalidate: 100
  }
}

export default HomePage