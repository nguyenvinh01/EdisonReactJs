import React, { useEffect, useState } from 'react';
import './App.css'
const Loading = () => {
    return (
        <div class="loader"></div>
    );
};
export default function TH2() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);
    return (
        <div class="loader">
            {isLoading && <Loading />}

        </div>
    )
}
