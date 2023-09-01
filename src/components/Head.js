import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col items-center px-2 m-2 shadow-sm'>
    <div className='flex items-center col-span-1 gap-3'>
      <img className='h-6 cursor-pointer' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" alt="menu" onClick={()=>toggleMenuHandler()}/>
      <a href="/"><img className='h-14' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo" /></a>
    </div>
    <div className='col-span-10 px-10 flex center'>
      <input placeholder='Search' type="text" className='w-1/2 border border-gray-400 py-2 px-5 rounded-l-full'/>
      <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'><img src="https://cdn-icons-png.flaticon.com/256/3917/3917132.png" alt="search" className='h-4' /></button>
    </div>
    <div className='col-span-1'>
      <img className='h-8' src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="user" />

    </div>
    </div>
  )
}

export default Head