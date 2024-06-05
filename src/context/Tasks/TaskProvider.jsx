import { useState } from 'react';
import { TaskContext } from "./TaskContext";
import { initialTasks } from "../../components/Main/Main.data";

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(initialTasks);
    const [queryParams, setQueryParams] = useState(new URLSearchParams(window.location.search));

    const addTask = (newTask) => {
        setTasks([
            ...tasks, {
                ...newTask,
                isCompleted: false,
                id: Math.max(...tasks.map((task) => task.id)) + 1,
            }])
    }

    const clearCompletedTasks = () => setTasks(tasks.filter(task => !task.isCompleted))

    const changeTaskDescription = (id, description) => setTasks(tasks.map(task => task.id === id ? { ...task, description: description } : task));

    const toggleTaskStatus = (id, value) => setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: value } : task));

    const updateQueryParams = (newParams) => {
        const updatedParams = new URLSearchParams(queryParams);

        for (const [key, value] of Object.entries(newParams)) {
            updatedParams.set(key, value);
        }

        setQueryParams(updatedParams);
        window.history.replaceState(null, null, `?${updatedParams.toString()}`);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                editTasks: setTasks,
                clearCompletedTasks,
                changeTaskDescription,
                toggleTaskStatus,
                updateQueryParams
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}
