import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index }) => {

    let bgColor2 = task.priority === "low" ? "bg-[#6C757D]" : task.priority === "medium" ? "bg-[#0D6EFD]" : "bg-[#DC3545]";

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className='w-full font-medium text-lg cursor-pointer bg-white border border-solid border-gray-500 rounded-lg my-2 p-3 flex place-content-around'>
                    <div className='w-1/3 capitalize text-left px-6'>{task.description}</div>
                    <div className='w-1/3'>{task.due_date}</div>
                    <div className='w-1/3 capitalize'><div className={'w-20 mx-auto text-center text-sm text-white font-semibold p-1 rounded-xl ' + bgColor2}>{task.priority}</div></div>
                </div>
            )}


        </Draggable >
    )
}

export default TaskItem;