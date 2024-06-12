import React from 'react'

const Nav = () => {
  return (
    <nav className='h-14  text-white flex items-center justify-between px-3 ' >
        
        <h1><span className='text-green-700 font-bold' >&lt;</span><span>Passward</span><span className='text-green-700 font-bold'>Maneger/&gt;</span></h1>
        <ul>
            <li className='flex gap-3'  >
                <a className='hover:font-semibold hidden' href="/">Home</a>
                
            </li>
        </ul>
    </nav>
  )
}

export default Nav