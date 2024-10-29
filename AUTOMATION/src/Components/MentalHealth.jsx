import React from 'react'

const MentalHealth = () => {
  return (
    <div>
        <div>
        <div className="container mx-auto p-4">
     <form  className="flex flex-col h-[calc(100vh-32px)] justify-center items-center">
        <h2 className="text-lg font-semibold">Upload Resume</h2>
        <input
          type="file"
          accept="application/pdf"
          
          className="mt-4 border rounded p-2"
        />
        <button type="submit" className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded" >
        </button>
      </form>

    


    </div>
    </div>
    </div>
  )
}

export default MentalHealth