
import { Check, CircleCheck, Star } from 'lucide-react'
import React from 'react'
import { CartoonButton } from '../../../components/ui/cartoon-button'


const AboutSection = () => {
    return (

        <div>
            <div className=' xl:px-32 px-4 py-10 xl:py-28'>
                <div className=" h-full xl:flex xl:h-[600px]">
                    <div className='flex items-center justify-center w-full xl:w-1/2 h-[500px] md:h-[600px]  xl:pr-20'>
                        <div className='w-[550px] h-full relative'>
                            <div className='w-full'>
                                <img className='w-full md:w-[407px] rounded-[50px]' src="https://t3.ftcdn.net/jpg/04/11/46/26/360_F_411462636_lkNQ6m8tFSlIECaTKw0o1vQskkEcPzE0.jpg" alt="" />
                            </div>

                            <div className='absolute right-0 bottom-0 h-[350px] bg-white border-[8px] border-white rounded-[30px] md:rounded-[50px] '>
                                <img className='rounded-[30px] md:rounded-[50px] w-[300px] md:w-[384px] object-cover' src="https://thumbs.dreamstime.com/b/dental-treatment-14922498.jpg?w=768" alt="" />
                            </div>
                            <div className='absolute bottom-20 right-64 md:top-16 md:right-14'>
                                <img id='Rotet' className='rotate-360-infinite w-24 md:w-36 ' src="http://localhost:5174/src/assets/images/about-experience-circle.png" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className='xl:w-1/2 h-full'>
                        <div className='mt-20'>
                            <div className='flex items-center gap-2'>
                                <span><Star className='text-[#1E84B5] text-xl' /></span>
                                <p className='text-[#1E84B5]'>ABOUT US</p>
                            </div>
                            <div>
                                <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                                    <span className='text-[#1E84B5]'>Your Journey</span> to a Healthier Smile Begins Here
                                </h1>
                            </div>
                            <div>
                                <p className='mt-5 text-lg text-gray-500'>The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.</p>
                            </div>
                            <div className='flex flex-wrap items-center justify-between mt-10'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span><CircleCheck className='text-[#1E84B5] text-xl' /></span>
                                        <p className='text-[#0E384C] text-lg font-semibold'>Experienced Team</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span><CircleCheck className='text-[#1E84B5] text-xl' /></span>
                                        <p className='text-[#0E384C] text-lg font-semibold'>State-Of-The-Art Technology</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span><CircleCheck className='text-[#1E84B5] text-xl' /></span>
                                        <p className='text-[#0E384C] text-lg font-semibold'>Comprehensive Services</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span><CircleCheck className='text-[#1E84B5] text-xl' /></span>
                                        <p className='text-[#0E384C] text-lg font-semibold'>Emergency Dental Services</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                {/* <Button variant="Default" className="rounded-full w-56 text-white h-12 text-base  bg-[#1E84B5]">Read More About Us</Button> */}
                                <CartoonButton label="Read More About Us" to='/contact' className='py-2 px-5 text-white text-lg rounded-lg bg-primary ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSection