import React from 'react';
import Fade from "react-reveal/Fade";

const Third = () => {
    return (
        <div className='flex flex-col justify-between items-center mt-4 mx-4'>
            <h2 className='sm:text-2xl'>xNFTs</h2>
            <div className='flex flex-row justify-between items-center mt-4 mx-4'>
                <div className='w-3/4 sm:w-1/2 h-fit border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex justify-center items-center'>
                    <Fade left cascade>
                    <div>
                        <p>
                        xNFTs (Extended Non-Fungible Tokens)
                        are a type of digital asset that extends
                        the capabilities of traditional NFTs
                        (Non-Fungible Tokens) by adding additional
                        information and functionality to them.
                        </p> <p>They are unique,
                        indivisible, and often used to represent ownership
                        of digital collectibles, gaming items, virtual real estate,
                        and more.</p> <p>The "x" in xNFT refers to the extended features
                        that are beyond the standard features of NFTs.</p>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Third;