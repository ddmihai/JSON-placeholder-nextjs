import React from 'react'
import { getAllUsers, getSpecificUser } from '../../lib/api-calls';

import { AiOutlineMail, AiOutlineUserAdd, AiOutlinePhone, AiOutlineFileText, AiOutlineHome } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { FaCity } from 'react-icons/fa';

import UserInfo from '../../components/user-main-details/userInfo';
import UserDetailLayout from '../../components/Layouts/UserDetailLayout';
import Loading from '../loading/loading';

import { useRouter } from 'next/router';
import Head from 'next/head';





const UserDetails = props => {

  const userData = props.user;
  const router = useRouter();


  if (router.isFallback) return <Loading />

  return (
    <section className='
      flex
      flex-wrap
      [&>aside]:flex-1
      [&>aside]:basis-80
      [&>aside]:w-full
      bg-pattern
      bg-cover
      h-auto
      '>

      <Head>
        <title>{ props.user.name }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Json user detailed tags" />
      </Head>

      <aside className='flex'>
        <div className='
          p-10
          bg-blackTransparent
          max-w-md
          basis-96
          flex-1
          border
          md:ml-auto
          ml-6 
          flex 
          flex-col 
          mr-6
          mt-[10%]
          h-fit'>

          <h1 className='text-3xl border-b pb-4 mb-4 border-b-orange font-extralight text-[orange]'>{ userData.name }</h1>
            <UserInfo title={userData.username} icon={<AiOutlineUserAdd size={30} className='text-[orange]'/>} />
            <UserInfo title={userData.email}    icon={<AiOutlineMail size={30} className='text-[orange]'/>} />
            <UserInfo title={`www.${userData.website}`}  icon={<AiOutlineFileText size={30} className='text-[orange]'/>} />
            <UserInfo title={userData.phone}    icon={<AiOutlinePhone size={30} className='text-[orange]'/>} />
          </div>
      </aside>


      <aside className='pl-4'>
        <UserDetailLayout>
          <h1 className='text-3xl border-b pb-4 mb-4 border-b-orange font-extralight text-[orange]'>Address</h1>
          <UserInfo title={userData.address.street} icon={<FiMapPin size={30} className='text-[orange]'/>} />
          <UserInfo title={userData.address.suite} icon={<AiOutlineHome size={30} className='text-[orange]'/>} />
          <UserInfo title={userData.address.city} icon={<FaCity size={30} className='text-[orange]'/>} />
        </UserDetailLayout>

        <UserDetailLayout>
          <h1 className='text-3xl border-b pb-4 mb-4 border-b-orange font-extralight text-[orange]'>Company</h1>
            <UserInfo title={userData.company.name} />
            <UserInfo title={userData.company.catchPhrase} />
            <UserInfo title={userData.company.bs} />
        </UserDetailLayout>
        
      </aside>
    </section>
  )
}





export const getStaticProps = async context => {
  const userId = context.params.id;
  const userDetails = await getSpecificUser(userId);


  return {
    props: {
      user: userDetails
    }
  }
};


export const getStaticPaths = async () => {
  const id = await getAllUsers();
  const paths = id.map(path => ({ 
    params: { id: path.id.toString() }
  }));

  return {
    paths: paths,
    fallback: true
  }
};



export default UserDetails