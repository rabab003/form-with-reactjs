import React from 'react';
import bg from './assets/innovative-futuristic-classroom-students.jpg'

export default function RightSide() {
  return (
    <div className='relative flex-grow'>
      <div className='absolute inset-0'>
        <img 
          src={bg} 
          className='w-full h-full object-cover'  
          alt="Innovative classroom" 
        />
        <div className='absolute inset-0 bg-black/70'></div>
      </div>
    </div>
  )
}