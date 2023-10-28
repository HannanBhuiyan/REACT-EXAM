export const initialState = {
    isLoading: true,
    isError: false,
    allcontacts: [],
    filterContacts: [],
    searchText: "",
    singleData: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_CONTACT":
            return {
                ...state,
                filterContacts: [...action.payload]
            }
        case "GET_CONTACT": 
            return {
                ...state,
                isLoading: false,
                isError: false,
                allcontacts: [...action.payload],
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "FILTER_CONTACT":
            let usaContactFilter;
            if(action.payload !== "all") {
                usaContactFilter = state.allcontacts.filter((curEle) => curEle.country.name ===  action.payload )
            } 
            else {
                usaContactFilter = [...state.allcontacts]
            }
            return {
                ...state,
                filterContacts: usaContactFilter
            }
        case "EVENT_FILTER":
            let eventFilterData;
            if(action.payload) {
                eventFilterData = state.allcontacts.filter((curEle) => curEle.id % 2 === 0)
            }
            else {
                eventFilterData = [...state.allcontacts]
            }
            return {
                ...state,
                filterContacts: eventFilterData,
            }
        case "UPDATE_FILTER_CONTACT_VALUE":
            return {
                ...state,
                searchText: action.payload
            }
        case "SEARCH_CONTACT": { 
            let search = state.searchText 
            let updateSearchContact = [...state.allcontacts]
            
            if(search) {
                updateSearchContact = updateSearchContact.filter((curEle) => {
                    return curEle.country.name.toLowerCase().includes(search)
                })
            } 
            return {
                ...state,
                filterContacts: updateSearchContact,
            } 
        }
        case "GET_SINGLE_CONTACT":
            let singleData = state.allcontacts.filter((curEle) => curEle.id === action.payload)
            return {
                ...state,
                singleData: singleData
            }
        default:
            return state;
    }
}