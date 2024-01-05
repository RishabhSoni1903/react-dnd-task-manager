import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full mx-auto text-white p-4 bg-blue-950 flex">
            <div className='w-4/5 mx-auto text-left'>
                <div className='font-semibold text-3xl cursor-pointer' onClick={() => navigate('/')}>ReactDnD</div>
            </div>
        </div>
    )
}

export default Navbar;
