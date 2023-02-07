import React from 'react';
import Fade from "react-reveal/Fade";
import Armani from '../Assets/Armani.png'
import Tom from '../Assets/Tom.png'
import Raj from '../Assets/raj.png'
import Toly from '../Assets/toly.png'
import Tristan from '../Assets/tristan.png'
import RedLogo from '../Assets/redLogo.png'
import Mad from "../Assets/Mad Lads.png";
import wao from '../Assets/THE LIFE OF WAO (1) 1.png'
import monkey from '../Assets/Monkey.png'

const Team = () => {
    return (
        <div className='flex flex-col justify-around items-center mt-2 mx-4 mb-8' id='team'>
            <h2 className='sm:text-2xl my-3'>Team</h2>
            <h3 className='sm:text-2xl my-3 px-6'>
                You can talk a lot about what
                a great team is working on a backpack,
                but it's better to read what its members
                write about themselves
            </h3>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-4'>
                <div className='w-3/4 sm:w-1/2 flex flex-col justify-between items-center gap-y-2 mx-4'>
                    <Fade left cascade>
                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Armani <br/>
                                <a href='https://twitter.com/armaniferrante' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={Armani} className='w-1/12 h-1/12'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Mad Monkey <br/>
                                <a href='https://twitter.com/MonkDoesnt' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={monkey} className='w-1/12 h-1/12 rounded-full'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Tom <br/>
                                <a href='https://twitter.com/tmlntn' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={Tom} className='w-1/12 h-1/12'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Raj <br/>
                                <a href='https://twitter.com/rajgokal' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={Raj} className='w-1/12 h-1/12'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Toly <br/>
                                <a href='https://twitter.com/aeyakovenko' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={Toly} className='w-1/12 h-1/12'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>Tristan <br/>
                                <a href='https://twitter.com/jackshaftoes' className='text-blue-600'>Twitter</a>
                            </p>
                            <img src={Tristan} className='w-1/12 h-1/12'/>
                        </div>

                        <div className='w-full flex flex-row justify-between items-center p-2 border border-white'>
                            <p className='w-1/3'>And other <br/>
                                <a href='https://twitter.com/xNFT_Backpack' className='text-blue-600'>Backpack</a>
                            </p>
                            <img src={RedLogo} className='w-1/12 h-1/12'/>
                        </div>
                    </Fade>
                </div>
                <div className='w-2/4 sm:w-1/3 flex items-center justify-center my-5 sm:mr-10'>
                    <Fade>
                        <img src={wao} alt='wao' className='justify-center items-center rounded-2xl'/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Team;