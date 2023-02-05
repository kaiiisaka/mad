import React from 'react';
import papich from '../Assets/papich.png'

const Footer = () => {
    return (
        <div className='flex flex-row justify-end items-center my-5'>
            <div className='w-3/4'>
                Made by goozoos#4799 with love to <a className='text-violet-800' href='https://discord.gg/madlads'>Mad Lads</a>, Feb 2023.
            </div>
            <div className='w-1/4'>
                <img src={papich} className='w-1/2 rounded-full pr-0'/>
            </div>
        </div>
    );
};

export default Footer;