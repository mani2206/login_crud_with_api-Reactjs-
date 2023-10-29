import React, { useState, useEffect } from 'react';
import RenderTbody from '../layerComponents/RenderTable';
import AddEmployee from '../layerComponents/AddEmployee';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmployee, headers } from '../../apis/userApi';
import Loader from '../baseComponents/PreLoader';

const Employee = () => {
    const [users, setUsers] = useState([]);
    const [appLoader, setAppLoader] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await getEmployee(headers);
                if (
                    response &&
                    response.status === 200 &&
                    response.statusText === 'OK'
                ) {
                    setUsers(response.data)
                    setAppLoader(false);

                }
                else {
                    toast.error("Something went wrong.");
                    setAppLoader(false);
                }
            } catch (error) {
                console.log(error.message);
                setAppLoader(false);
            }
        }
        fetchUsers();
    }, [])
    return (
        <main className='content p-5'>
            <section>
                <aside className='d-flex justify-content-end'><AddEmployee /></aside>
                <div className="table-responsive">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appLoader ? 
                                <tr className='bg-light'><td colSpan={7}><Loader width="70" height="70" /></td></tr> :
                                <RenderTbody users={users} />}
                        </tbody>

                    </table>
                </div>
            </section>
        </main>
    )
}

export default Employee