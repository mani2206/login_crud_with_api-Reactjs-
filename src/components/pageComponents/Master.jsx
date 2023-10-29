import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../layerComponents/TopNavbar';
import Loader from '../baseComponents/PreLoader';

const Master = () => {

    const auth = localStorage.getItem("auth");

    const navigate = useNavigate();
    const [appLoader, setAppLoader] = useState(true);

    const authentication = () => {
        try {
            const response = auth;
            if (!response) {
                localStorage.clear();
                setAppLoader(false)
                navigate("/login");
            }
            else {
                setAppLoader(false)
            }
        } catch (error) {
            console.log(error);
            setAppLoader(false)
        }
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            authentication();
        }, 200);
        return () => clearTimeout(timeOut);
    }, [])

    return (
        /* Start: Router
            ========================================= */
        <>
            {appLoader ?
                <div className="w-100 vh-80 d-flex justify-content-center align-items-center">
                    <Loader width="70" height="70" />
                </div> :
                <div className="master-container">
                    <TopNavbar />
                    <div className="content d-flex">
                    </div>
                    <div className="main-container w-100">
                        <Outlet />
                    </div>
                </div>
            }

        </>
        /* End: Router
    ========================================= */
    )
}

export default Master