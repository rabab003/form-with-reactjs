import React, { useState } from 'react';


export default function LeftSide() {

  const [formInput, setFormInput] = useState({
    name : "",
    lastName : "",
    email : "",
    phone : "",
    gender : "",
  })

  return (
    <>
    <form onSubmit={(eve)=>{ 
      eve.preventDefault();
      console.log(formInput)
      


    }} action="" className=' w-[400px] p-8 bg-[#0A0A0A] h-[600px] overflow-y-auto  rounded-3xl text-white'>

    <div className=''>

        <div className='flex flex-col pb-5'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>your name</label>
        <input value={formInput.name} onChange={(e)=>{setFormInput({...formInput, name:e.target.value})}} className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='your name' type="text" />
        </div>

        <div className='flex flex-col pb-5'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>your last name</label>
        <input value={formInput.lastName} onChange={(e)=>{setFormInput({...formInput, lastName:e.target.value})}} className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='your email' type="text" />
        </div>

        <div className='flex flex-col pb-5'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>email</label>
        <input value={formInput.email} onChange={(e)=>{setFormInput({...formInput, email:e.target.value})}} className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='email' type="text" />
        </div> 

        <div className='flex flex-col pb-5'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>phone</label>
        <input value={formInput.phone} onChange={(e)=>{setFormInput({...formInput, phone:e.target.value})}} className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='phone number' type="text" />
        </div> 

        {/* <div className='flex flex-col'>
        <label htmlFor="" className='text-xl font-semibold capitalize'>gender:</label>
        <input className='border-2 rounded-sm mt-3 border-[#1F2D3F] outline-none text-sm p-2' placeholder='email' type="text" />
        </div>  */}

        <div className='py-3'>
          <label htmlFor="">gender : </label>
            <input name='gender' checked={formInput.gender ==="male"}     onChange={(e)=>{setFormInput({...formInput, gender:e.target.value})}} className='ml-4 mr-1' value={"male"} type='radio' />male
            <input name='gender' checked={formInput.gender ==="female"} onChange={(e)=>{setFormInput({...formInput, gender:e.target.value})}} className='ml-4 mr-1' value={"female"} type='radio' />female                      
        </div>

    </div>

    <button className='mt-7 py-2 rounded-lg cursor-pointer bg-[#315E75] w-full '>submit</button>
  
  </form>
    
    </>  
)
}
