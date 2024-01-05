import React from 'react'
import TaskItem from './TaskItem'
import { Droppable } from 'react-beautiful-dnd'

const ItemsList = ({ tasks, dId }) => {

    const comparePriorities = (taskA, taskB) => {
        const priorityOrder = { low: 0, medium: 1, high: 2 };
        return priorityOrder[taskB.priority] - priorityOrder[taskA.priority];
    };
    const sortedTasks = tasks.sort(comparePriorities);

    return (
        <div className='m-2 p-2 place-content-around'>
            <div className='flex place-content-around py-2 text-md font-medium bg-gray-300 rounded'>
                <div className='w-1/3'>Description</div>
                <div className='w-1/3'>Due date(yyyy/mm/dd)</div>
                <div className='w-1/3'>Priority</div>
            </div>
            {/* Droppable */}
            <Droppable droppableId={dId} className='my-5'>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {sortedTasks.map((i, index) => {
                            return <TaskItem key={i.id} index={index} task={i} />
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default ItemsList
