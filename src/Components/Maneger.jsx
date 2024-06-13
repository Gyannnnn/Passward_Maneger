import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'; // Correct import
import { BiShow,BiHide  } from "react-icons/bi";
import { useState } from 'react';

const Maneger = () => {
const [icon,setIcon]= useState('BiShow')
const IconToggler=()=>{
    setIcon(prevIcon => prevIcon === 'BiShow' ? 'BiHide'  :'BiShow')
}
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="mx-auto max-w-4xl pt-1 gap-2">
                <h1 className="text-center mb-2">
                    <span className="text-green-900 font-bold text-3xl">&lt;</span>
                    <span className="text-white text-3xl">Password</span>
                    <span className="text-green-900 font-bold text-3xl">Manager/&gt;</span>
                </h1>
                <p className="text-center text-white font-serif">Your Own Password Manager</p>
                <div className="flex flex-col text-white p-4 gap-3">
                    <input className="rounded-md border border-green-600 px-4 py-1 outline-none bg-transparent" type="text" placeholder="Enter Website url" />
                    <div className="flex gap-6 w-full justify-between">
                        <input className="w-1/2 bg-transparent border border-green-500 rounded-md px-4" type="text" placeholder="Enter Username" />
                        <div className='border border-green-600 rounded-md flex justify-between items-center w-1/2 px-2 '> 
                            <input className="w-full bg-transparent px-4" type="text" placeholder="Enter Passward" />
                            <span className='font-medium text-2xl hover:cursor-pointer  hover:opacity-50' onClick={IconToggler} >{icon === 'BiShow' ? <BiShow /> : <BiHide />}</span>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-green-500 rounded-lg font-semibold hover:bg-green-400 py-1 ">
                        <IoAddCircleOutline className='' /> Add Password
                    </button>
                </div>
            </div>
        </>
    );
}

export default Maneger;
