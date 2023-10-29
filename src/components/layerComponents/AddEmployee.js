import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { moduleAddEmployee } from '../../utilis/formFields/FormData';
import FormField from '../baseComponents/Form';
import { addEmployee, headers } from '../../apis/userApi';
import { useNavigate } from 'react-router-dom';
import { employeeSchema } from '../baseComponents/Validation'
import { getprefixName } from '../baseComponents/Common';
import Loader from '../baseComponents/PreLoader';

const AddEmployee = () => {
    // const API_KEY = '25bedf9ce6774fa29c3ddb335b58b84e'
    // const API_KEY = 'b5b14cc19b1044b4a6745565b1b45297'
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [appLoader, setAppLoader] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        gender: '',
        date_of_birth: ''
    })
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const clearFunc = () => {
        window.location.reload(false);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let errorMessage = {}
        async function sendData() {
            try {
                await employeeSchema.validate(formData, { abortEarly: false }).then(async (responseData) => {
                    setFormError({});
                    setAppLoader(true);
                    var response = await addEmployee(responseData, headers);
                    if (response) {
                        setFormData(response.data);
                        setShow(false)
                        navigate('/employee')
                        clearFunc();
                        setAppLoader(false);
                    }
                })

            } catch (error) {
                const errors = error.errors;
                setAppLoader(false);
                console.log(error.errors)
                {
                    errors.map((error) => {
                        errorMessage[getprefixName(error)] = error;
                        setFormError(errorMessage);
                    })
                }
            }
        }
        sendData();
    }
    return (
        /* Start: Add employee
          ========================================= */
        <>
            <Button onClick={handleShow} variant="" className='btn-pink'> Add Employee </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>

                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title>{moduleAddEmployee.Title}</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    {
                        appLoader ?
                            <div className="w-100 vh-80 d-flex justify-content-center align-items-center"><Loader width="70" height="70" /></div> :
                            <form onSubmit={handleSubmit}>
                                <FormField
                                    schema={moduleAddEmployee}
                                    setFormData={{ formData, setFormData }}
                                    setFormError={{ formError, setFormError }}
                                    setIsSubmit={{ isSubmit, setIsSubmit }}
                                    template={moduleAddEmployee.employeeForm}
                                />
                            </form>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
        /* End: Add employee
        ========================================= */
    )
}

export default AddEmployee