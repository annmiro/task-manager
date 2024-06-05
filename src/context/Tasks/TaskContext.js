import React from "react";

export const TaskContext = React.createContext({
    tasks: [],
    addTask: () => { },
    editTasks: () => { },
    clearCompletedTasks: () => { },
    changeTaskDescription: () => { },
    toggleTaskStatus: () => { },
    updateQueryParams: () => { },
});