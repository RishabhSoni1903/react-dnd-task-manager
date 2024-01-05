import React from 'react'
import { DATA } from '../data'

const AddData = () => {

    const handleClick = () => {
        localStorage.setItem("categories", DATA);
    }

    return (
        <button onClick={handleClick} className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add Data
        </button>
    )
}

export default AddData
