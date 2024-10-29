import React from 'react'
import CareerMapping from '../Components/CareerMapping'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    
<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Application!</h1>
            <p className="text-lg mb-6 text-center max-w-md">
                Discover amazing features and tools that will enhance your experience. Let's start your journey towards achieving your goals!
            </p>
           <Link to="/career" className='mt-4 bg-indigo-600 text-white px-4 py-2 rounded'>Career Mapping</Link>
        </div>
    </>
  )
}

export default Home