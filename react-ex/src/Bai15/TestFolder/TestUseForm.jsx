import React from 'react'

export default function TestUseForm() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm()
    const sendData = (values) => {
        console.log(222, values);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(sendData)}>
                <label>
                    Name:
                    <input id='name' {...register('name')} ></input>
                </label>
                <label>
                    Email:
                    <input id='email' {...register('name')}></input>
                </label>
                <button>Reset</button>
            </form>
        </div>
    )
}
