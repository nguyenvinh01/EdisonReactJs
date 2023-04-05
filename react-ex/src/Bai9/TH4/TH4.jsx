import React, { useState } from "react";

const TH4 = () => {
    const [userInput, setUserInput] = useState("");
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };
    const handleButtonClick = (e) => {
        alert(userInput)
    }
    return (
        <div>
            <input
                type="text"
                name="user"
                placeholder="Please type somthing"
                onChange={handleInputChange}
            />
            <button
                onClick={handleButtonClick}
            >Print</button>
        </div>
    )
}
export default TH4