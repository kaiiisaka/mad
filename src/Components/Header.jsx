import React from 'react';
import pixel from '../Assets/pixel-logo.png'

const Header = () => {

    const toWallet = () => {
        document.getElementById('wallet111').scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className='flex flex-row justify-between items-center text-white pt-4 mb-4'>
            <div className='w-1/4 h-full'>
                <img src={pixel} alt='pixel' className='sm:w-4/6 pl-6'/>
            </div>
            <div className='w-1/4 flex flex-row justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110'>
                <button onClick={toWallet}>Wallet</button>
            </div>
            <div className='w-1/4 flex flex-row justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110'>
                <button onClick={() => {document.getElementById('mad').scrollIntoView({behavior: "smooth"})}}>Mad Lads</button>
            </div>
            <div className='w-1/4 flex flex-row justify-center'>
                <button className='transition ease-in-out hover:-translate-y-1 hover:scale-110' onClick={() => {document.getElementById('team').scrollIntoView({behavior: "smooth"})}}>Team</button>
            </div>
        </div>
    );
};

export default Header;