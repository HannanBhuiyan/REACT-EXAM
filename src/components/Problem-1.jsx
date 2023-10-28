import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTodoContext } from '../context/TodoContext';

const Problem1 = () => {

    const { submitHandler, filters, task, filterItem }  = useTodoContext()
    
    const [show, setShow] = useState('all');
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    const handleClick = (val) =>{
        setShow(val);
    }


    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault()
        let newTask = {id: uuidv4(), name: name, status: status}
        submitHandler(newTask)
        setName("")
        setStatus("")
    }


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit}  className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" onChange={(e) => { setName(e.target.value) }}  value={name} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" onChange={(e) => { setStatus(e.target.value) }} value={status}  className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>{handleClick('all'), filterItem('all')}}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>{handleClick('active'), filterItem("active")}}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>{handleClick('completed'), filterItem('completed')}}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {filters.map((curElem, index) => {
                                    return(
                                        <tr key={index}> 
                                            <td>{curElem.name}</td>
                                            <td>{curElem.status}</td> 
                                        </tr> 
                                    )
                                })} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;