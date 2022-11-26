import React from 'react'
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import TechDescription from './TechDescription';
import TechnologyHeader from './TechnologyHeader';
import BasicTitle from '../title/title';


const TechnologiesUsed = () => {

    
  return (
    <section>
        <BasicTitle title='Tech used...' />

        <div className='
            [&>div]:border-l-4  
            [&>div]:border-l-orange
            [&>div]:flex-1
            [&>div]:max-w-sm
            [&>div]:basis-80
            [&>div]:m-4
            flex flex-wrap 
            justify-center'>
            
            <div>
                <TechnologyHeader text='NextJS' icon={<TbBrandNextjs size={34} className='text-[orange]'/>} />

                <TechDescription text='Static site generation' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Dynamic routes' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Basic SEO configuration' icon={<BsCheckAll color='#00E676' size={20} />}/>
            </div>


            <div>
                <TechnologyHeader text='Tailwind CSS' icon={<SiTailwindcss size={34} className='text-[orange]'/>} />
                
                <TechDescription text='Utility classes' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Reduced CSS size' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Fast and compact' icon={<BsCheckAll color='#00E676' size={20} />}/>
            </div>


            <div>
                <TechnologyHeader text='JSON Placeholder' icon={<AiOutlineSetting size={34} className='text-[orange]'/>} />

                <TechDescription text='Ready to display data' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Free to use' icon={<BsCheckAll color='#00E676' size={20} />}/>
                <TechDescription text='Easy to call endpoints' icon={<BsCheckAll color='#00E676' size={20} />}/>
            </div>
        
        </div>
    </section>
  )
}

export default TechnologiesUsed