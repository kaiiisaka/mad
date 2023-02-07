import React, {useEffect, useState} from 'react';
import smoking from '../Assets/manSmoke.png'
import Fade from 'react-reveal/Fade';
import {Zoom} from "react-reveal";
import blueBall from '../Assets/blue_ball 1.png'

const First = () => {

    const [lang, setLang] = useState('');

    return (
        <div className='flex flex-col justify-between items-center mt-4 mx-4 mb-8'>
            <div className='p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col sm:flex-row justify-between items-center'>
                <div className='w-full flex flex-col justify-start w-3/4 sm:w-1/2 h-fit'>
                    <div className='flex flex-row justify-between'>
                        <div className='ball'>
                            <img src={blueBall} className='h-16 w-16 animate-bounce'/>
                        </div>
                        <div className='ball'>
                            <img src={blueBall} className='h-16 w-16 animate-bounce'/>
                        </div>
                    </div>
                    <div id='greeting' className='border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col justify-center items-start'>
                            <p>
                                Hello, stranger.. You looks lonely..<br/>
                                Join to our Mad family. <br/>
                                We accept everyone who deserves it, and you look very worthy. <br/>
                                Since you found us, I think we will work together.
                                Come, I'll show you what's here and how it works.
                            </p>
                    </div>
                </div>

                <div className='w-3/4 sm:w-1/4 flex items-center justify-center sm:mr-10'>
                    <Fade>
                        <img src={smoking} alt='WAO' className='border border-white '/>
                    </Fade>
            </div>
            </div>
            <div className='p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col sm:flex-row justify-between items-center'>
                <div className='w-3/4 sm:w-1/2 h-fit border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col justify-center items-center'>
                    <Zoom bottom cascade>
                        <p>
                            Perhaps you know that before
                            no one knew about any Mad Lads
                            and everyone heard only wao and ONE.
                        </p>
                        <p>
                            Well, I'll tell you something. WAO means
                            we are one. Since we are all one, everyone
                            should understand each other.
                            And it's not all about English.
                        </p>
                        <p>
                            Choose some language and look how will it be in this language we are one
                        </p>
                    </Zoom>
                </div >
                <div className='w-3/4 sm:w-1/4 h-fit flex-col items-center justify-between font-mono'>
                    <select
                    className='rounded-full bg-black p-2 justify-between items-center'
                    onChange={(event) => {setLang({value: event.target.value})}}
                    >
                        <option defaultValue='' disabled value=''>select lang</option>
                        <option value='Nosotros somos uno'>spanish</option>
                        <option value='Мы едины'>russian</option>
                        <option value='ми одні'>ukrainian</option>
                        <option value='我们是一个'>chinese</option>
                        <option value='私たちは一つです'>japanese</option>
                        <option value='Nous sommes un'>french</option>
                        <option value='jesteśmy jednością, (NOT kurwa Ja pierdolę)'>polish</option>
                    </select>
                    <div className='mt-4 pl-4 items-center justify-between'>
                        <div>{lang.value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;