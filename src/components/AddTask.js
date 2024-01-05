import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addTask')
    }

    return (
        <div>
            <button onClick={handleClick} className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Add task
            </button>
        </div>
    )
}

export default AddTask
