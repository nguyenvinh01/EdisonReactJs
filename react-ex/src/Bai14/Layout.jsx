import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
    const navigate = useNavigate()
    // useEffect()
    function click() {
        navigate("/home")
    }
    return (
        <div>

            <div>
                <ul>
                    <li>
                        {/* <Link to={ }>asdasd</Link> */}
                    </li>
                </ul>
            </div>
            <button onClick={() => {
                navigate("/home")
            }}>Home Click</button>
            <Outlet />

        </div>
    )
}
