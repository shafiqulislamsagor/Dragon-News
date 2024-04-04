import moment from 'moment';
import Logo from '../assets/logo.png'
import { useEffect, useState } from 'react';

const Title = () => {
    const [sec,setSec] = useState('')
    const time = moment().format('MMMM Do YYYY')
    const day = moment().format('dddd')
    useEffect(()=>{
        setInterval(() => {
            const time = moment().format('h:mm:ss a')
            setSec(time)
        }, 1000) 
    },[])
    return (
        <div className='flex justify-center text-center'>
            <div className='mt-3'>
                <img src={Logo} className='bg-slate-400 w-[70%] lg:w-auto mx-auto py-1 px-2 rounded-lg mb-5' alt="dragon new logo" />
                <h2 className='mb-1 font-Poppins text-sm lg:text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h2>
                <h2 className='font-Poppins text-sm lg:text-lg text-[#706F6F]'><span className='text-[#8a8686]'>{day}</span> , {time},Time: {sec}</h2>
            </div>
        </div>
    );
};

export default Title;