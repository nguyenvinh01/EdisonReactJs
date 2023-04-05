import React from 'react';

const UserForm = (props) => {
    const { name, onChange } = props;

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={onChange} />
        </div>
    );
};

export default UserForm;