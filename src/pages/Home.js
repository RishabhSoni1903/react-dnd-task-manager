import React, { useState } from 'react'
import TaskList from '../components/TaskList'
import { DragDropContext } from 'react-beautiful-dnd'
import AddTask from '../components/AddTask'

const Home = () => {

    const DATA = JSON.parse(localStorage.getItem("categories"));
    const [categories, setCategories] = useState(DATA)

    const handleDragDrop = (results) => {
        console.log("drag and dropped", results)
        const { source, destination } = results;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const categorySourceIndex = categories.findIndex(
            (category) => category.id === source.droppableId
        );
        const categoryDestinationIndex = categories.findIndex(
            (category) => category.id === destination.droppableId
        );

        const newSourceItems = [...categories[categorySourceIndex].tasks];
        const newDestinationItems =
            source.droppableId !== destination.droppableId
                ? [...categories[categoryDestinationIndex].tasks]
                : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newCategories = [...categories];

        newCategories[categorySourceIndex] = {
            ...categories[categorySourceIndex],
            tasks: newSourceItems,
        };
        newCategories[categoryDestinationIndex] = {
            ...categories[categoryDestinationIndex],
            tasks: newDestinationItems,
        };

        const newCategoriesStr = JSON.stringify(newCategories)
        setCategories(newCategories);
        localStorage.removeItem("categories")
        localStorage.setItem("categories", newCategoriesStr)
        console.log(newCategories);
    }

    return (
        <div className='w-4/5 my-6 mx-auto'>
            <div className='text-center text-4xl font-bold text-[#1C1C1C]'>
                <p>Manage your Tasks</p>
            </div>
            <AddTask />
            <DragDropContext onDragEnd={handleDragDrop}>
                <div className='flex flex-wrap'>
                    {categories.map((item) => {
                        return <TaskList id={item.id}
                            key={item.id}
                            title={item.title}
                            tasksData={item.tasks} />
                    })}
                </div>
            </DragDropContext>
        </div>
    )
}

export default Home
