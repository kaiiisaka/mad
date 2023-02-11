import React from 'react';
import Fade from 'react-reveal/Fade';
import pxLogo from "../Assets/redLogo.png";
// import * as THREE from 'three'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Second = () => {

    // const scene = new THREE.Scene()
    // const camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1, 1000)
    // camera.position.z = 10;
    //
    // const rerender = new THREE.WebGLRenderer({alpha: true, antialias: true})
    // rerender.setClearColor(0x000000, 0);
    // rerender.setSize(720, 50)
    //
    // rerender.domElement.setAttribute('id', 'backpack3d');
    // document.body.insertBefore(rerender.domElement, document.body.firstChild)
    //
    // const aLight = new THREE.AmbientLight(0x404040, 1.2);
    // scene.add(aLight);
    //
    // const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
    // pLight.position.set(0, -3, 7)
    // scene.add(pLight);
    //
    // let loader = new GLTFLoader();
    // let obj = null;
    //
    // loader.load('../Assets/3D/ball_blue/scene.gltf', function (gltf){
    //     obj = gltf;
    //     obj.scene.scale.set(1, 1, 1);
    //     scene.add(obj.scene)
    // },
    //     (xhr) => {
    //         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    //     },
    //     (error) => {
    //         console.log( error );
    //     })


    return (
        <div className='lg:h-screen flex flex-col justify-around items-center mt-2 mx-4 mb-8' id='wallet111'>
            <h2 className='sm:text-2xl my-3'>The future is already here</h2>
            <div className='flex flex-col sm:flex-row justify-between items-center mx-4'>
                <div className='w-3/4 sm:w-1/2 h-fit border border-white p-2 sm:p-5 mb-2 sm:text-2xl flex justify-center items-center'>
                    <Fade left>
                        <p>
                            Well, let's start. We are here developing
                            the first open-source cross-chain wallet
                            and the home for your xNFTs.<br/>
                            You probably don't even know what that means.
                            Cross-chain wallet, you know? This means that
                            all your assets are in one place. You no
                            longer need to have several wallets, constantly
                            switch between them, remember how much money is
                            in each account .. all this is in the past. Now
                            everything is in one place, but that's not all...
                        </p>
                    </Fade>
                </div>
                <div className='w-2/4 sm:w-1/5 flex items-center justify-center sm:mr-10'>
                    {/*<div id='3dContainer'>*/}

                    {/*</div>*/}
                    <Fade bottom>
                    <img src={pxLogo} alt='red Logo' className='justify-center items-center'/>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Second;