import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleIncrement = ()=>{
    setCount((preCount)=> preCount + 1)
    }

    const handleDecrement = ()=>{
    setCount((preCount)=> preCount - 1)
    }

    return (
        <div className='bg-gray-100 text-center  '>
            <h1>count {count} </h1>

            <button onClick={handleIncrement}>Increment</button> 
            <button onClick={handleDecrement}>Decrement</button> 
        </div>
    );
};

export default Counter;