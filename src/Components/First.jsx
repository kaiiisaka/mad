import React, {useEffect, useState} from 'react';
import smoking from '../Assets/manSmoke.png'
import Fade from 'react-reveal/Fade';
import {Zoom} from "react-reveal";
import blueBall from '../Assets/blue_ball 1.png'
import cl from './First.module.css'

const LANGUAGES_LIST = [
    {
        lang:'russian',
        name: 'Мы едины'
    },
    {
        lang:'spanish',
        name: 'Nosotros somos uno'
    }, {
        lang:'chinese',
        name: '我们是一个'
    }, {
        lang:'japanese',
        name: '私たちは一つです'
    }, {
        lang:'french',
        name: 'Nous sommes un'
    }, {
        lang:'polish',
        name: 'jesteśmy jednością'
    },
]

const First = () => {

    const [lang, setLang] = useState('es');

    return (
        <div className='flex flex-col justify-between items-center mt-4 mx-4 mb-8'>
            <div className='p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col sm:flex-row justify-between items-center'>
                <div className='w-full flex flex-col justify-start w-3/4 sm:w-1/2 h-fit'>
                    <section className='flex flex-row justify-between'>
                        <figure className='ball'>
                            <img src={blueBall} id='goBall' className={cl.goBall}/>
                        </figure>
                        {/*<figure className='ball'>*/}
                        {/*    <img src={blueBall} className='h-16 w-16 animate-bounce'/>*/}
                        {/*</figure>*/}
                    </section>
                    <article id='greeting' className='border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col justify-center items-start'>
                            <p>
                                Hello, stranger.. You looks lonely..<br/>
                                Join to our Mad family. <br/>
                                We accept everyone who deserves it, and you look very worthy. <br/>
                                Since you found us, I think we will work together.
                                Come, I'll show you what's here and how it works.
                            </p>
                    </article>
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
                    value={lang}
                    onChange={(event) => {setLang(event.target.value)}}
                    >
                        {LANGUAGES_LIST.map(({lang, name}) => <option key={lang} value={name}>{lang}</option> )}

                    </select>
                    <div className='mt-4 pl-4 items-center justify-between'>
                        <div>{lang}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;