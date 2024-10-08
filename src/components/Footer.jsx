import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                    <div className='flex-1 mb-4 md:mb-0'>
                        <h3 className='text-2xl font-bold mb-2'>Prasath</h3>
                        <p className='text-gray-400'>Frontend Developer, specializing in web and software development</p>
                    </div>

                    <div className='flex-1 w-full mt-4'>
                        <label htmlFor="email" className='block mb-2'>Your Email</label>
                        <div className='flex items-center'>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'  // Margin right for spacing
                            />
                            <button
                                type='submit'
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg' // Margin left for spacing
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>


                </div>

                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
                    justify-between items-center'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()} Prasath. All rights reserved.
                    </p>

                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="https://www.linkedin.com/in/prasath-n-reactjsdeveloper/" className="text-gray-400 hover:text-white text-xl">
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/hardikprasath?tab=repositories" className='text-gray-400 hover:text-white text-xl'>
                            <FaGithub />
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white text-xl'>
                            <FaFacebook />
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white text-xl'>
                            <FaTwitter />
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Privacy
                        </a>
                        <a href="#" className='text-gray-400 hover:text-white'>
                            Terms of Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer