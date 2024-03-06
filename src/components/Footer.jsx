import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='max-width-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MOSEC.</h1>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Ducimus mollitia consequuntur quo vel molestias excepturi, dolores dicta, esse provident, magnam eum asperiores doloremque. 
                Sapiente quos, ipsa alias delectus veniam culpa?
            </p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size ={30}/>
                <FaTwitterSquare size ={30}/>
                <FaGithubSquare size ={30}/>
                <FaInstagramSquare size = {30}/>
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h1 className='font-medium text-gray-400'>Solutions</h1>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h1 className='font-medium text-gray-400'>Support</h1>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h1 className='font-medium text-gray-400'>Company</h1>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h1 className='font-medium text-gray-400'>Legal</h1>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer