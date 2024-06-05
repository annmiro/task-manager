import ThemeProvider from "./Theme/ThemeProvider";
import TaskProvider from "./Tasks/TaskProvider";

function MainProvider({ children }) {
    return (
        <ThemeProvider>
            <TaskProvider>
                {children}
            </TaskProvider>
        </ThemeProvider>
    )
}

export default MainProvider;