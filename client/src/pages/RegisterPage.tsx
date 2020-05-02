import React from 'react';
import { Form, withFormik, FormikProps, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import * as e6p from 'es6-promise';
(e6p as any).polyfill();

function api<T>(url: string, apiMethod: string): Promise<T> {
    return fetch(url, {
        method: apiMethod,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json() as Promise<T>;
    })
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface FormProps {
    createdAt?: Date;
}

// function api<T>(url: string, reqMethod: string): Promise<T> {
//     return fetch(url, { method: reqMethod, mode: 'no-cors'})
//     .then(response => {
//         if(!response.ok) {
//             throw new Error(response.statusText)
//         }
//         return response.json() as Promise<T>
//     })
// }

const InnerForm: React.FunctionComponent<InjectedFormikProps<FormProps, FormValues>> = (
    props,
) => (
    <form onSubmit={props.handleSubmit}>
        <input id='firstName' placeholder='First Name' type='text' onChange={props.handleChange} value={props.values.firstName} />
        <input id='lastName' placeholder='Last Name' type='text' onChange={props.handleChange} value={props.values.lastName} />
        <input id='email' placeholder='Email...' type='email' onChange={props.handleChange} value={props.values.email} />
        <input id='password' placeholder='Password' type='password' onChange={props.handleChange} value={props.values.password} />
        <button type='submit' disabled={props.isSubmitting}>
            Register
        </button>
    </form>
);

const RegisterForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        createdAt: new Date(),
    }),

    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required"),
        lastName: Yup.string()
            .required("Last name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit: (values, {setSubmitting}) => {
        // const myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({"email":values.email,"password":values.password,"firstName":values.firstName,"lastName":values.lastName, "createdAt": new Date()});

        // const apiHeaders: Headers = new Headers();
        // apiHeaders.append('Content-Type', 'application/json');

        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: apiHeaders,
        //     body: raw,
        //     redirect: 'follow',
        // })
        // .then(res => console.log(res.text()))
        // .catch(error => {
        //     console.log('Error:', error)
        // })

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        axios.post('http://localhost:3000/users', {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            createdAt: new Date()
        }, options)
        .then(res => console.log(res.statusText))
        .catch(err => { console.log(err) })

        // const formJSON: string = JSON.stringify({
        //     'email': values.email,
        //     'password': values.password,
        //     'firstName': values.firstName,
        //     'lastName': values.lastName,
        //     'createdAt': new Date(),

        // });
        // console.log(formJSON);

        // api<{ formJSON: string }>('http://localhost:3000/users', 'POST')
        // .then(({ formJSON }) => {
        //     console.log(formJSON);
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    },
})(InnerForm);

export default RegisterForm;