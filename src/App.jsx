
import './App.css'
import Counter from './Components/Counter/Counter'

function App() {

  return (
    <>
      
      <div className='w-screen h-screen p-10'>
      <h1 className='text-2xl max-w-md mx-auto text-center font-bold'>This simple redux applications when I created this  </h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Counter></Counter>
        
      </div>
      </div>
    </>
  )
}

export default App
