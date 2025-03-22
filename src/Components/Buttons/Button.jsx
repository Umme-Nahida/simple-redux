import React from 'react';

const Button = ({children, danger, type, handler}) => {

    const style = type === danger ? "bg-red-400 text-white py-3 px-5 rounded" : "bg-blue-400 text-white py-3 px-5 rounded"

    return (
        <button className={style} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;