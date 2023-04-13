import React, { createContext, useState } from 'react'

export const MyAppContext = createContext({
    isLogin: false,
    message: '',
    setMessage: message => undefined
})
export function MyAppProvider({ children }) {
    const [message, setMessage] = useState('');

    return (
        <MyAppContext.Provider
            value={{
                isLogin: false,
                message: '',
                setMessage: setMessage
            }}
        >

            {children}
        </MyAppContext.Provider>
    )
}
