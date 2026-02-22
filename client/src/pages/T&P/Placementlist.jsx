import React from 'react'

const Placementlist = () => {
  return (
   <div className="min-h-screen bg-gray-100 p-8 max-w-6xl mx-auto text-primary    shadow-md rounded-xl 
                       hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300 ease-in-out ">
      <h1 className="text-3xl font-semibold mb-4">
        PlacementList
        <hr className='text-2xl font-bold '></hr>
      </h1>
      

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden max-w-6xl mx-auto">
        <iframe
          src="/regulation.pdf"
          title="Academic Regulation PDF"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  )
}

export default Placementlist