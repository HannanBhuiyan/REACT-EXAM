import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/assets/scss/App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {BrowserRouter} from "react-router-dom";
import { TodoProvider } from './context/TodoContext';
import { ContactProvider } from './context/ContactContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <TodoProvider>
      <ContactProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ContactProvider>
   </TodoProvider> 
  
)
