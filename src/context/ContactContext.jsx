import React, { createContext, useContext, useEffect, useReducer, useRef } from "react"
import { initialState, reducer } from "../reducer/ContactReducer"
import axios from "axios"


export const ContactContext = createContext()


const ContactProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { searchText, allcontacts } = state

    // call api for get product
    const getContacts = async () => {
        dispatch({ type: "SET_LOADING" })
        try {
           let res = await axios.get(`https://contact.mediusware.com/api/contacts/?page=1`)
            dispatch({
                type: "GET_CONTACT",
                payload: res.data.results
            })
        } catch (error) {
            dispatch({
                type: "SET_ERROR"
            })
        }
    }

    const filterContact = (contact) => {
        console.log(contact)
        dispatch({ type: "FILTER_CONTACT", payload: contact})
    }

    // event number filter
    const evenNumberFilter = (event) => {
        dispatch({ type: "EVENT_FILTER", payload: event.target.checked })
    }

    // search contact
    const searchFilterContact = (e) => {
        let value = e.target.value
        dispatch({ type: "UPDATE_FILTER_CONTACT_VALUE", payload: value })
    }

    const getSingleContact = (id) => {
        dispatch({ type: "GET_SINGLE_CONTACT", payload: id })
    }

    useEffect(() => {
        dispatch({ type: "SEARCH_CONTACT" })
    },[searchText])

    useEffect(() => {
        dispatch({ type: "LOAD_CONTACT", payload: allcontacts })
    },[allcontacts])

    useEffect(() => {
        getContacts()
    },[])

    return <ContactContext.Provider value={{ 
        ...state, 
        filterContact, 
        evenNumberFilter, 
        searchFilterContact,
        getSingleContact
        }} >
        {children}
    </ContactContext.Provider>
}

const useContactContext = () => {
    return useContext(ContactContext)
} 

export { ContactProvider, useContactContext }