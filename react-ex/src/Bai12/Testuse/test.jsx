import React, { useRef } from "react";
import { useContext } from "react";
import { MyAppContext, MyAppProvider } from "../../providers/MyAppProvider";

const B12Test = () => {
    const inputRef = useRef(null)
    const handleClick = () => {
        // inputRef.current.focus()
        console.log(context.isLogin);
    }
    const context = useContext(MyAppContext)
    return (
        <>
            <input type="text" ref={inputRef} />
            <button ref={handleClick}>Click</button>
        </>
    )
}
export default B12Test