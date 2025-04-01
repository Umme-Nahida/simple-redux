import Button from '../Buttons/Button';

const Counter = ({count,onIncrement,onDecrement}) => {
    

    return (
        <div className='bg-gray-100 text-center p-5 space-y-5 '>
            <h1>count {count} </h1>

            <div className='flex items-center justify-center gap-3'>
            <Button handler={onIncrement} >
                Increment
            </Button>

            <Button type={'danger'} handler={onDecrement} >
                Decrement
            </Button>
            </div>

           
        </div>
    );
};

export default Counter;