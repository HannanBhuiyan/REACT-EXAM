
// handle localStorage
const getAllLocalData = () => {
    const todo = localStorage.getItem("tasklist")
    if(todo) {
        return JSON.parse(todo)
    }
    else {
        return []
    }
}

// todo initial state
export const initialState = {
    task: getAllLocalData(),
    filters: []
}

// create reducer for todo
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                task: [...state.task, action.payload],
            }
        case "LOAD_ALL_DATA":
            let filterIttem = state.task.sort((a, b) => {
                if (a.status === "active") {
                    return -1;
                } else if (b.status === "active") {
                    return 1;
                } else if (a.status === "completed") {
                    return -1;
                } else if (b.status === "completed") {
                    return 1;
                } else {
                    return 0;
                }
            })
            return {
                ...state,
                filters: [...filterIttem]
            }
        case "ALL_FILTER_ITEM":
            let updateItem = state.task.filter((curElem) => curElem.status === action.payload)
            if(action.payload === 'active'){
                return {
                    ...state,
                    filters: updateItem,
                }
            }
            else if(action.payload === 'completed'){
                return {
                    ...state,
                    filters: updateItem,
                }
            }
            else {
                return {
                    ...state,
                    filters: [...state.task],
                }
            }
        default:
            return state;
    }
}