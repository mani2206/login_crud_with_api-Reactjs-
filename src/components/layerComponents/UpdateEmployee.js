import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { moduleUpdateEmployee } from '../../utilis/formFields/FormData';
import FormField from '../baseComponents/Form';
import axios from 'axios';
import { updateEmployee, headers } from '../../apis/userApi';
import { useNavigate } from 'react-router-dom';
import { employeeSchema } from '../baseComponents/Validation';
import { getprefixName } from '../baseComponents/Common';
import { toast } from 'react-toastify';
import Loader from '../baseComponents/PreLoader';

const UpdateEmployee = ({ employeeId }) => {
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

    useEffect(() => {
        axios.get('http://localhost:8000/users/' + employeeId)
            .then(response => setFormData(response && response.data))
            .catch(error => console.log(error))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let errorMessage = {}
        async function sendData() {
            try {
                await employeeSchema.validate(formData, { abortEarly: false }).then(async (responseData) => {
                    setFormError({});
                    setAppLoader(true);

                    var response = await updateEmployee(formData, headers);
                    if (
                        response
                    ) {
                        setFormData(response.data);
                        setShow(false)
                        navigate('/employee')
                        clearFunc();
                        setAppLoader(false);
                        toast.success('Employee details updated successfully!')
                    }
                })
            } catch (error) {
                const errors = error.errors;
                setAppLoader(false);
                console.log(error)
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
        /* Start: Update employee
          ========================================= */
        <>
            <span className='pe-2 cursor-pointer' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16px" height="16px">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </span>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title>Update Employee</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    {
                        appLoader ?
                            <div className="w-100 vh-80 d-flex justify-content-center align-items-center"><Loader width="70" height="70" /></div> :
                            <form onSubmit={handleUpdate}>
                                <FormField
                                    schema={moduleUpdateEmployee}
                                    setFormData={{ formData, setFormData }}
                                    setFormError={{ formError, setFormError }}
                                    setIsSubmit={{ isSubmit, setIsSubmit }}
                                    template={moduleUpdateEmployee.employeeForm}
                                />
                            </form>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
        /* End: Update employee
        ========================================= */
    )
}

export default UpdateEmployee