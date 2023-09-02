import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARRCH_API } from '../utils/Constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSugestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=> store.search);
  const dispatch = useDispatch();

  useEffect(()=>{
     const timer =  setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSugestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);
     
      return()=>{
      clearTimeout(timer);
     }
  }, [searchQuery]);

  const getSearchSuggestions = async()=>{
    console.log("API call- "+searchQuery);
    const data = await fetch(YOUTUBE_SEARRCH_API+ searchQuery);
    const json = await data.json();

    setSugestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  }


  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col items-center px-2 m-2 shadow-sm'>
    <div className='flex col-span-1 gap-3 items-center'>
      <img className='h-6 cursor-pointer' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" alt="menu" onClick={()=>toggleMenuHandler()}/>
      <a href="/"><img className='h-14' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo" /></a>
    </div>
    <div className='flex col-span-10 px-10 center'>
      <div className='flex center w-full'>
      <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='Search' type="text" className='w-1/2 border border-gray-400 py-2 px-5 rounded-l-full' onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
      <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'><img src="https://cdn-icons-png.flaticon.com/256/3917/3917132.png" alt="search" className='h-4' /></button>
    </div>
    {showSuggestions && (    <div className='px-5 mx-2 my-11 py-0 fixed bg-white w-[33.3rem] rounded-lg shadow-lg border-gray-100'>
      <ul className='flex flex-col'>
        {suggestions.map(s=><li key={s} className='mx-0 px-1 py-2 hover:bg-gray-100'>{s}</li>)}
      </ul>
    </div>)}
    </div>
    <div className='col-span-1'>
      <img className='h-8' src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="user" />

    </div>
    </div>
  )
}

export default Head