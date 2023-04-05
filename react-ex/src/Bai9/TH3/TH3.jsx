import React,{ useState } from "react";

const DemoComponent = (props)=>{
    return (
        <div>
            
        <div>
            Day la tuoi:{props.age}
            </div>
        
        <div>Day la ten:{props.displayName}</div>
        
        </div>
    )
}
const TH3 = ()=>{
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Cee');
    const onIncrease = ()=>{
        setAge(age+1)
    }
    return (
        <div>
            <div>
                {age}
            </div>
            <div onClick={onIncrease}>Tang age len 1</div>
            <DemoComponent age={age} displayName={name}/>
        </div>
    )
}
export default TH3