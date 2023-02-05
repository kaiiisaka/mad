import React from 'react';
import Fade from 'react-reveal/Fade';
import Mad from '../Assets/Mad Lads.png'

const Fourth = () => {
    return (
        <div className='flex flex-col justify-around items-center mt-2 mx-4 mb-8' id='mad'>
            <h2 className='sm:text-2xl my-3'>Mad Lads</h2>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-4'>
                <div className='w-3/4 sm:w-1/2 h-fit border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex flex-col justify-center items-center'>
                    <Fade left cascade>
                        <p>
                            The facets that comprise the Mad Lads are the different definitions of the word mad.
                            We have those infected with madness, they change the world through the inability to
                            see the status quo or lines drawn in the sand that society lives by. Their unique
                            and particular perspectives allow them to operate completely out of the box, and in
                            doing so, some of them erase or redraw those lines. These are the Picasso’s,
                            the Van Gogh’s and Michelangelos.
                        </p><p>
                            It is spirit of innovation and progress
                            that drives the Mad Lads and ensures their
                            continued impact on society.
                        </p><p>
                            Lets go and change the world, because we're the ones mad enough to try!
                        </p>
                    </Fade>
                </div>
                <div className='w-2/4 sm:w-1/5 flex items-center justify-center sm:mr-10'>
                    <Fade>
                    <img src={Mad} alt='Mad Labs' className='justify-center items-center'/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Fourth;