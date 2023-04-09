import React from 'react'

const Navbar = () => {
  return (
    <div>
    
    <div className='grid place-content-center'>
        <div className="text-xl font-bold text-justify py-4"> E-Waste Management</div></div>
   <div className='grid place-content-center w-full'>
    </div>    
        <div className='text-center'><button className='m-4 p-2 rounded-lg hover:bg-thm-blue'>Home</button> 
        <button className='m-4 p-2 rounded-lg hover:bg-thm-blue'> Data </button> 
        <button className='m-4 p-2 rounded-lg hover:bg-thm-blue'> Resources  </button> 
        <button className='m-4 p-2 rounded-lg hover:bg-thm-blue'> About Us </button>
    
        
    </div>
    </div>
  )
}

export default Navbar