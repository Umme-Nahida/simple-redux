
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter/Counter'
import Stats from './Components/Stats/Stats'

const initialCounter =[
  {id:1,
    value:0
  },
  {id:2,
    value:0
  }
]

function App() {
  const [counters,setCounters] = useState(initialCounter)
  console.log(counters)

  return (
    <>
      
      <div className='w-screen h-screen p-10'>
      <h1 className='text-2xl max-w-md mx-auto text-center font-bold'>This simple redux applications when I created this  </h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Counter></Counter>
        <Counter></Counter>
        <Stats totalCount={10} />
      </div>
      </div>
    </>
  )
}

export default App
