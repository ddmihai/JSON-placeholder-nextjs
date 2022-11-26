import React, { Fragment } from 'react'
import Header from '../header/header'

const Layout = props => {

  return (
    <Fragment>
        <Header />
        <main className='h-screen'>
            { props.children }
        </main>
    </Fragment>
  )
}

export default Layout