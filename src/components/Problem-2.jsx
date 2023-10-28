import React, { useState } from 'react';
import { useContactContext } from '../context/ContactContext';

const Problem2 = () => {

    const { 
        evenNumberFilter,
        searchText,
        searchFilterContact,
        filterContact,
        filterContacts,
        getSingleContact,
        singleData
        } = useContactContext()
 
    const [activeContact, setContact] = useState(1) 

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning"  data-bs-toggle="modal" data-bs-target="#exampleModal2"  type="button" >US Contacts</button>
                </div>
            </div>

            {/* bootstrap modal */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                    <div className="modal-header modal_bg text-white">
                        <h5 className="modal-title" id="exampleModalLabel">Modal A</h5>
                        <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="problem_two_body"  >
                            <div className="modal_button_group text-center mt-3">
                                <button onClick={() => { setContact(1), filterContact("all")  }} className={` ${activeContact === 1 ? ' text-white btn success_btn right_margin' : 'btn success_btn_outline'} `} >All Contact</button>
                                <button onClick={() => { setContact(2), filterContact("United States") }} className={` ${activeContact === 2 ? 'btn success_btn left_margin' : 'btn success_btn_outline'} `} >US Contact</button>
                            </div>
                            <div className="search text-center mt-4 mb-4 px-5">
                               <form onSubmit={(e) => { e.preventDefault() }} >
                                    <input 
                                    type="text" 
                                    value={searchText} 
                                    onChange={searchFilterContact} 
                                    className="form-control" 
                                    placeholder="Search contact" 
                                />
                               </form>
                            </div>
                            <div className="contact_body" >
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Country</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { filterContacts.map((contact, index) => {
                                            return ( 
                                                <tr className='contact_tr' data-bs-toggle="modal" data-bs-target="#exampleModal3" key={index} onClick={() => { getSingleContact(contact.id) }} > 
                                                    <td>{contact.id}</td>
                                                    <td>{contact.phone}</td>
                                                    <td>{contact.country.name}</td>
                                                </tr>  
                                            )
                                        })} 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer modal_bg text-white">
                        <label>
                            <input type="checkbox" onChange={(e) => {evenNumberFilter(e)}} /> <span>Only Even</span>
                        </label>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* modal two */}
            <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                    <div className="modal-header modal_b_bg text-white">
                        <h5 className="modal-title" id="exampleModalLabel">Modal B</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="problem_two_body"  >
                            <div className="modal_button_group text-center mt-3">
                                <button onClick={() => { setContact(1), filterContact("all")  }} className={` ${activeContact === 1 ? 'btn success__b_btn right_margin' : 'btn success_b_btn_outline'} `} >All Contact</button>
                                <button onClick={() => { setContact(2), filterContact("United States") }} className={` ${activeContact === 2 ? 'btn success__b_btn left_margin' : 'btn success_b_btn_outline'} `} >US Contact</button>
                            </div>
                            <div className="search text-center mt-4 mb-4 px-5">
                               <form onSubmit={(e) => { e.preventDefault() }} >
                                    <input 
                                    type="text" 
                                    value={searchText} 
                                    onChange={searchFilterContact} 
                                    className="form-control" 
                                    placeholder="Search contact" 
                                />
                               </form>
                            </div>
                            <div className="contact_body" >
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Country</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { filterContacts.map((contact, index) => {
                                            return (
                                                <tr className='contact_tr' data-bs-toggle="modal" data-bs-target="#exampleModal3" key={index} onClick={() => { getSingleContact(contact.id) }}> 
                                                    <td>{contact.id}</td>
                                                    <td>{contact.phone}</td>
                                                    <td>{contact.country.name}</td>
                                                </tr> 
                                            )
                                        })} 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer modal_b_bg text-white">
                        <label>
                            <input type="checkbox" onChange={(e) => {evenNumberFilter(e)}} /> <span>Only Even</span>
                        </label>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* single data model */}
            <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                    <div className="modal-header modal_bg text-white">
                        <h5 className="modal-title" id="exampleModalLabel">Modal C</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="problem_two_body"  >
                            <ul className="list-group p-4 ">
                               {
                                singleData.map((curEle, index) => {
                                    return(
                                        <div key={index}>
                                            <li className="list-group-item">ID: {curEle.country.id}</li>
                                            <li className="list-group-item">ID: {curEle.country.name}</li>
                                        </div>
                                    )
                                })
                               }
                                
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer modal_bg text-white"> 
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;