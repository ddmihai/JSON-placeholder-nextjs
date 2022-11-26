import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <section className='border bg-blackWaves h-96'>
        <div className='h-full bg-blackTransparent flex items-center justify-center'>
            
            {/* Text container */}
            <div className='flex flex-col justify-center items-center flex-1 max-w-prose p-2'>
                <h1 className='mt-6 mb-3 text-4xl text-[orange]'>JSON users</h1>
                <h4 className='my-6 mb-4 text-[orange]'>This piece of work is a minimum graphic representation of JSON placeholder, and is meant
                    to be a simple practical exercice that statically renders a range of information in advance.
                </h4>

                <Link href='/about' className='border border-orange text-[orange] px-16 py-2 cursor-pointer'>Find more</Link>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner
