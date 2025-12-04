import React from 'react'

const PageTitle = ({pageName, pageRoute}) => {
  return (
    <div className="h-full ">
      <div className="relative max-w-7xl h-80 rounded-2xl mx-auto bg-gradient-to-t from-[#2B4CA4] to-[#1D2236] ">
        {/* GRID OVERLAY */}
        <div
          className="w-full h-full absolute inset-0 opacity-50 z-10 rounded-2xl
      bg-[linear-gradient(#ffffff0e_2px,transparent_2px),linear-gradient(90deg,#ffffff0e_2px,transparent_2px)]
      bg-[size:40px_40px]"
        ></div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white mb-5">{pageName}</h1>
            <p className="text-white font-semibold">{pageRoute}</p>
        </div>

        {/* TEXT & CONTENT – NOW ON TOP */}
        

       
      </div>
    </div>
  )
}

export default PageTitle