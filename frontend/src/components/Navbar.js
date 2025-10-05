import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-600 p-4'>
    <div className='flex justify-around items-center'>
        <div className='text-white font-semibold'>
            <a href="/">Home</a>
        </div>
        <div className='text-white font-semibold'>
            <a href="/view-cart">View Cart</a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
