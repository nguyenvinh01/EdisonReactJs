import { useForm, Controller } from "react-hook-form";

export default function TestUIComponent() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: ''
        }
    });
    const onSubmit = data => console.log(data);
    const sendData = (values) => {
        console.log(222, values);
    }
    return (
        <form onSubmit={handleSubmit(sendData)}>
            <label htmlFor="name">
                Name:
            </label>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <input id='name' {...field} />}
            />
            {/* <input id='name' {...register('name')} ></input> */}
            <label htmlFor="email">
                Email:
            </label>
            <Controller
                name="email"
                control={control}
                render={({ field }) => <input id='email' {...field} />}
            />
            {/* <input id='email' {...register('name')}></input> */}
            <button>Reset</button>
        </form>
        // </form>
    );
};