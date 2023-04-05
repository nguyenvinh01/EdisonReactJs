import React from 'react';

const Greeting = (props) => {
    const { name } = props;

    return (
        <div>
            <h2>Greeting {name}</h2>
        </div>
    );
};

export default Greeting;