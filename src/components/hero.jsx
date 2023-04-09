import React from 'react'

const Hero = () => {
  return (
    <div>
    <section className="py-24 flex items-center min-h-screen justify-center bg-white">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-the-blue2">E-Waste Management</p><p className='text-lg font-medium leading-8 text-lpu-org'>@ Lovely Professional University</p>
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Best E-Waste Management System ♻️</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">At Lovely Professional University we ensure the proper disposal of the E-waste. This helps us to maintain our campus and Environment Clean</p>
      </div>
  
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="#" className="transform rounded-md bg-green-i px-5 py-3 font-medium text-black transition-colors hover:bg-thm-blue">Steps</a>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero