import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

// const validationSchema = Yup.object().shape()({
// })

export default function TestFormik() {
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            console.log(1, values);
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors['emai']}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
