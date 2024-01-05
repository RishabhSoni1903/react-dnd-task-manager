import React from 'react'
import ItemsList from './ItemsList'

const TaskList = ({ id, title, tasksData }) => {

    return (
        <div className='my-6 mx-2 rounded h-min w-full text-center border border-solid border-gray-500'>
            <div
                className={"font-semibold text-3xl p-2"}
            >{title}</div>
            <div>
                <ItemsList tasks={tasksData} dId={id} />
            </div>
        </div>
    )
}

export default TaskList
