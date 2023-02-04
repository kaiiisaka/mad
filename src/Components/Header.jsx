import React from 'react';
import pixel from '../Assets/pixel-logo.png'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center text-white pt-4 mb-4'>
            <div className='w-1/4 h-full'>
                <img src={pixel} alt='pixel' className='sm:w-4/6 pl-6'/>
            </div>
            <div className='w-1/4 flex flex-row justify-center'>
                <p>Wallet</p>
            </div>
            <div className='w-1/4 flex flex-row justify-center'>
                <p>Madlabs</p>
            </div>
            <div className='w-1/4 flex flex-row justify-center'>
                <p>Team</p>
            </div>
        </div>
    );
};

export default Header;