import React, { useState } from 'react'

export default function TH4() {

    const [values, setValues] = useState({ email: '', name: '', content: '' });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        alert(JSON.stringify(values));
    };
    return (
        <div>
            <h1>Liên hệ</h1>
            <form onSubmit={handleSubmit}>
                <p>Nhập tên:</p>
                <input
                    name="name"
                    type="text"
                    defaultValue={values.name}
                    onChange={handleChange}
                />
                <p>Nhập email:</p>
                <input
                    name="email"
                    type="email"
                    defaultValue={values.email}
                    onChange={handleChange}
                />
                <p>Nội dung muốn gửi:</p>
                <textarea
                    name="content"
                    defaultValue={values.content}
                    onChange={handleChange}
                />
                <br />

                <p>bấm submit form</p>
                <button>submit nè</button>
            </form>
        </div>
    )
}
