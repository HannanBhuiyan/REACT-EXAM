import React, {createContext, useContext, useEffect, useReducer} from "react";
import { initialState, reducer } from "../reducer/TodoReducer";
 


export const TodoContext = createContext()


const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // add task
     const submitHandler = (newTask) => {
        console.log(newTask)
        dispatch({ type: "ADD_TASK" , payload: newTask })
    }

     // filter item
     const filterItem = (item) => {
        dispatch({ type: "ALL_FILTER_ITEM", payload: item})
    }

    useEffect(() => {
        dispatch({ type: "LOAD_ALL_DATA" })
    },[state.task])

    useEffect(() => {   
        localStorage.setItem("tasklist", JSON.stringify(state.task))
    },[state.task])

    return <TodoContext.Provider value={{ ...state, submitHandler, filterItem }}>
        {children}
    </TodoContext.Provider>
}

const useTodoContext = () => {
    return useContext(TodoContext)
} 

export { TodoProvider, useTodoContext }