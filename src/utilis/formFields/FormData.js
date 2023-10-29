/* Start: SignIn form datas
========================================= */
export const moduleFormData = {
    Title: "Staff Login",

    moduleForm: [
        {
            label: "Email",
            name: "email",
            type: "email",
            id: "Email",
            placeholder: "Email",
            mandatory: true,
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            id: "Password",
            placeholder: "Password",
            mandatory: true,
        },
        {
            label: "LogIn",
            name: "loginSubmitBtn",
            type: "submit",
            id: "loginBtn",
            bgcolor: "#ec549b",
            color:" #ffffff"

        },
    ],
};
/* End: SignIn form datas
========================================= */

/* Start: Add employee datas
========================================= */
 export const moduleAddEmployee = {
    Title: "Add Employee",
    employeeForm: [
        {
            type: "title",
            heading: "Personal Information"
        },
        {
            label: "First Name",
            name: "first_name",
            type: "text",
            id: "first-name",
            placeholder: "First Name",
            mandatory: true,
        },
        {
            label: "Last Name",
            name: "last_name",
            type: "text",
            id: "last-name",
            placeholder: "Last Name",
            mandatory: true,
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            id: "email",
            placeholder: "Email",
            mandatory: true,
        },
        {
            label: "Phone Number",
            name: "phone_number",
            type: "NumberFormat",
            id: "phone-number1",
            placeholder: "Phone Number",
            mandatory: true,
        },
        {
            label: "Gender",
            name: "gender",
            select: "Gender",
            lookUP:"front",
            type: "dropdown",
            options: ["Male", "Female", "Others"],
            id: "gender",
            placeholder: "Gender",
            mandatory: true,
        },
        {
            label: "Date of Birth",
            name: "date_of_birth",
            type: "date",
            id: "dob",
            placeholder: "Date of Birth",
            mandatory: true,
        },
        {
            label: "Add Employee",
            name: "employeeSubmitBtn",
            type: "submit",
            id: "addEmployeeBtn",
            bgcolor: "#ec549b",
            color:" #ffffff"
        },
    ]
}

    export const moduleUpdateEmployee = {
        Title: "Update Employee",
        employeeForm: [
            {
                type: "title",
                heading: "Personal Information"
            },
            {
                label: "First Name",
                name: "first_name",
                type: "text",
                id: "first-name",
                placeholder: "First Name",
                mandatory: true,
            },
            {
                label: "Last Name",
                name: "last_name",
                type: "text",
                id: "last-name",
                placeholder: "Last Name",
                mandatory: true,
            },
            {
                label: "Email",
                name: "email",
                type: "email",
                id: "email",
                placeholder: "Email",
                mandatory: true,
            },
            {
                label: "Phone Number",
                name: "phone_number",
                type: "NumberFormat",
                id: "phone-number1",
                placeholder: "Phone Number",
                mandatory: true,
            },
            {
                label: "Gender",
                name: "gender",
                select: "Gender",
                type: "dropdown",
                options: ["Male", "Female", "Others"],
                id: "gender",
                placeholder: "Gender",
                mandatory: true,
            },
            {
                label: "Date of Birth",
                name: "date_of_birth",
                type: "date",
                id: "dob",
                placeholder: "Date of Birth",
                mandatory: true,
            },
            {
                label: "Update Employee",
                name: "employeeSubmitBtn",
                type: "submit",
                id: "updateEmployeeBtn",
                bgcolor: "#ec549b",
                color:" #ffffff"
            },
        ]
};