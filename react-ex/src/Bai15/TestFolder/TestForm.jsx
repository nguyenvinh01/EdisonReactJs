import React, { useState } from 'react'

export default function TestForm() {
    const [value, setValue] = useState('');
    const onChangeValue = (e) => setValue(e.target.value)
    const handleSubmit = (event) => {
        alert('A name was submitted: ', value)
    }
    const [form, setForm] = useState({
        name: '',
        email: ''
    })
    console.log(form);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input id='name' value={form.name} onChange={(event) => {
                        setForm({ ...form, name: event.target.value })
                    }}></input>
                </label>
                <label>
                    Email:
                    <input id='email' value={form.email} onChange={(event) => {
                        setForm({ ...form, email: event.target.value })
                    }}></input>
                </label>
                <button onClick={() => {
                    setForm({
                        name: '',
                        email: ''
                    })
                }}>Reset</button>
            </form>
        </div>
    )
}
