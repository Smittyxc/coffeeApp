import PWABadge from './PWABadge.tsx'
import './App.css'

function App() {

  return (
      <div className='flex flex-col w-full py-4 gap-4 justify-center items-center'>
        <h1 className='text-4xl w-fit p-2 border border-lime-400'>App Name</h1>
        <div className='h-100 w-3/4 bg-lime-400 rounded-2xl shadow-lg'></div>
        <div className='h-100 w-3/4 bg-fuchsia-400 rounded-2xl shadow-lg'></div>
        <div className='h-100 w-3/4 bg-orange-400 rounded-2xl shadow-lg'></div>
        <PWABadge />
      </div>
  )
}

export default App
