import React, { useState } from 'react'

export default function TH3() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([]);
    const total = products.reduce((acc, ele) => acc + ele.price, 0);
    const onAddProduct = () => setProducts([...products, { name, price: Number(price) }]);

    return (
        <div>
            <input
                placeholder='Enter name...'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                placeholder='Enter price...'
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <div onClick={onAddProduct}>Add product</div>
            <div>Total: {total}</div>
            <ul>
                {products.map((e, i) => <li key={i}>{e.name} - {e.price}</li>)}
            </ul>
        </div>
    )
}
