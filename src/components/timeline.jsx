import React from 'react'

function Timeline() {
  return (
    <div>
      

<h1 class="text-3xl text-center py-3">Recycling Process</h1>

<div class="min-h-screen flex items-center justify-center">
  <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
    <div class="flex flex-row-reverse md:contents">
      <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
        <h3 class="font-semibold text-xl mb-1 text-gray-900">E-Waste Collection </h3>
        <p class="text-gray-600">In Lovley Professional University there are proper e-waste collection center allocated to every block in which students/Proffesors can drop of their e-waste and the university has also designated the department that collects the university e-waste.</p>
      </div>

      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
        </div>

        <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
      </div>
    </div>

    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
        </div>

        <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
      </div>

      <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
        <h3 class="font-semibold text-xl mb-1 text-gray-900">E-waste Separation</h3>
        <p class="text-gray-600">The e-Waste gets separated into different section.Such as Hardware , Scrap Metal , Wires, Sensors etc. </p>
      </div>
    </div>

    <div class="flex flex-row-reverse md:contents">
      <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
        <h3 class="font-semibold text-xl mb-1 text-gray-900">E-waste Transportation</h3>
        <p class="text-gray-600">The separated E-waste gets transferred to the problem recycle center to get proper disposal.</p>
      </div>

      <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
        </div>

        <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
      </div>
    </div>

    <div class="flex md:contents">
      <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
          <div class="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
        </div>

        <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
      </div>

      <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
        <h3 class="font-semibold text-xl mb-1 text-gray-900">The Recycling </h3>
        <p class="text-gray-600">In recycling plant the e-waste gets properly disposed and converted to usable material that can used to make new products and this helps to keep the environment safe by not releasing toxic , harmfull metal in environment.</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Timeline