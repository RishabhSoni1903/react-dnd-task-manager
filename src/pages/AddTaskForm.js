import React, { useState } from 'react'
import { v4 } from 'uuid';

const AddTaskForm = () => {

    const [formData, setFormData] = useState({
        id: '',
        description: '',
        due_date: '',
        priority: '',
    });

    const addTaskToStorage = (task) => {
        const tasks = JSON.parse(localStorage.getItem("categories"));
        tasks[0].tasks.push(task);
        localStorage.removeItem("categories");
        localStorage.setItem("categories", JSON.stringify(tasks));
        setFormData({
            id: '',
            description: '',
            due_date: '',
            priority: '',
        })
    }

    const handleInputChange = (e) => {
        const generatedUuid = v4();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, id: generatedUuid });
    };

    const handleAddTask = (e) => {
        e.preventDefault()
        addTaskToStorage(formData);
    }

    return (
        <div className='w-2/5 my-6 mx-auto'>
            <div className="w-full">
                <form onSubmit={handleAddTask} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <input required onChange={handleInputChange} value={formData.description} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Description of task" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="due_date">
                                Due Date
                            </label>
                            <input required onChange={handleInputChange} value={formData.due_date} name="due_date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="due_date" type="date" placeholder="" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Priority
                            </label>
                            <div className="relative">
                                <select required onChange={handleInputChange} value={formData.priority} name="priority" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="priority">
                                    <option value=''>Select priority</option>
                                    <option value='low'>Low</option>
                                    <option value='medium'>Medium</option>
                                    <option value='high'>High</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add task
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddTaskForm
