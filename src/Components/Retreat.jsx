import React from 'react';


function Retreat() {
  return (
    <div className="ml-10 mr-10">
      <div className="bg-gray-100 flex flex-col items-center justify-center py-5">
        <div className="flex flex-1">
          <div className="flex-1 p-1 text-black flex items-center mb-2">
            <div className="max-w-xl mx-auto">
              <p className="text-black font-semibold text-4xl">General Fitness Yoga Camp</p>
              <p className='text-black text-xl'>
                A 3-day yoga camp to enhance overall fitness and well-being. Relaxation, and rejuvenation awaits you at Kolkata
              </p>
            </div>
          </div>
          <div className="flex-1 p-5">
            <img
              src="https://cdn.midjourney.com/5d5f32ef-c40a-4258-9856-85db2f4f943a/0_0.jpeg"
              alt="..."
              className='w-full h-[400px] object-cover'
            />
          </div>
        </div>

        <div className="flex flex-1 mt-5">
          <div className="flex-1 p-5">
            <img
              src="https://cdn.midjourney.com/ec4680e8-d074-4a69-a24b-3d3f3946907b/0_2.jpeg"
              alt="..."
              className='w-full h-[400px] object-cover'
            />
          </div>
          <div className="flex-1 p-1 text-black flex items-center">
            <div className="max-w-xl mx-auto">
              <p className="text-black font-semibold text-4xl">Yoga Event</p>
              <p className='text-black text-xl'>
                A description for Yoga Event 12. Come with us and improve your overall well-being through yoga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retreat;

