import React from 'react'

export default function LeftSide() {
  return (
    <>
    <form action="" className=' h-screen md:w-[50%] rounded-3xl '>


    <div className=''>
        <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>your name</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='your name' type="text" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>your last name</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='your email' type="text" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>email</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='email' type="text" />
        </div> 
        <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>phone</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='email' type="text" />
        </div> 
        {/* <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>gender:</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='email' type="text" />
        </div>  */}

        <div>
          <label htmlFor="">gender : </label>
            <input name='status' value={"male"} type='radio' />male
            <input name='status' value={"female"} type='radio' />female                      
        </div>
    </div>
    <button>submit</button>
  </form>
    
    </>  
)
}
