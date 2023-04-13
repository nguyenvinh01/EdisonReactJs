import React, { useEffect, useState } from 'react'

export default function BT1() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [total, setTotal] = useState(0)
    const [multiply, setMultiply] = useState(0)
    const handleTotal = () => {
        const result = parseInt(number1) + parseInt(number2);
        setTotal(result)
    }
    const handleMul = () => {
        const result = parseInt(number1) * parseInt(number2);

        setMultiply(result)
    }
    return (
        <div>
            <input type="text" onChange={e => setNumber1(e.target.value)} />
            <button onClick={handleTotal}>Add</button>
            <input type="text" onChange={e => setNumber2(e.target.value)} />
            <button onClick={handleMul} >Mul</button>
            <div>
                Tổng là: <input type="number" value={total} />
            </div>
            <div>
                Tích là:<input type="number" value={multiply} />
            </div>
        </div>
    )
}
