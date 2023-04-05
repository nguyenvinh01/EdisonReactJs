import React, { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';

const BT2 = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <UserForm name={name} onChange={handleNameChange} />
            <Greeting name={name} />
        </div>
    );
};

export default BT2;