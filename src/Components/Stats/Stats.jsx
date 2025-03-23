import React from 'react';

const Stats = ({totalCount}) => {
    return (
        <div className='bg-gray-200 p-10 text-center'>
           <h1>Total Count: {totalCount} </h1>
        </div>
    );
};

export default Stats;