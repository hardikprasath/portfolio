import React from 'react';
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt=""
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-0'>
                        <p className='text-lg mb-8'>
                            I am passionate Frontend Developer with a focus on building
                            modern and responsive web applications. With a strong foundation
                            in frontend technologies. I strive to create seamless and efficient user experiences.
                        </p>

                        <div className='space-y-4 px-4'>
                            <div className='flex items-center'>
                                <label htmlFor="html" className='w-3/12 text-xs sm:text-base'>HTML</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="css" className='w-3/12 text-xs sm:text-base'>CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="javascript" className='w-3/12 text-xs sm:text-base'>Java</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="javascript" className='w-3/12 text-xs sm:text-base'>Javascript</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="reactjs" className='w-3/12 text-xs sm:text-base'>ReactJS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="mysql" className='w-3/12 text-xs sm:text-base'>MySQL</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='mt-3 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    0+
                                </h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    10+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    5+
                                </h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
