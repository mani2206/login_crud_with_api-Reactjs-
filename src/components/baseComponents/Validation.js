import * as yup from 'yup';

const alphabetRegex = /^[A-Za-z ]*$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const employeeSchema = yup.object().shape({
    first_name: yup.string().matches(alphabetRegex, 'First name is not valid').max(20).required('First name is required.'),
    last_name: yup.string().matches(alphabetRegex, 'Last name is not valid').max(20).required('Last name is required.'),
    email: yup.string().email('Email is invalid.').required('Email is required.'),
    phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "Phone number is too short")
        .max(10, "Phone number must be less than or equal to 10")
        .required('A phone number is required'),
    gender: yup.string().required('Gender is required.'),
    date_of_birth: yup.string().required('Date of Birth is required.')
})
