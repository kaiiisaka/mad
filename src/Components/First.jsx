import React from 'react';
import smoking from '../Assets/manSmoke.png'
import Fade from 'react-reveal/Fade';

const First = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center mt-4 mx-4 mb-8'>
            <div className='w-3/4 sm:w-1/2 h-fit border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex justify-center items-center'>
              <Fade>
                  <p>
                      Hello, stranger.. You looks lonely..<br/>
                      Join to our Mad family. <br/>
                      We accept everyone who deserves it, and you look very worthy. <br/>
                      Since you found us, I think we will work together.
                      Come, I'll show you what's here and how it works.
                  </p>
              </Fade>
            </div>
            <div className='w-3/4 sm:w-1/4 flex items-center justify-center sm:mr-10'>
                <img src={smoking} alt='WAO' className='border border-white '/>
            </div>
        </div>
    );
};

export default First;