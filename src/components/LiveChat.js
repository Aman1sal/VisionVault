import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/Helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            // console.log("Api polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20),
            }))

        }, 1500);

        return ()=> clearInterval(i);
    },[]);

  return (
    <>
    <div className='ml-2 p-2 border border-black w-full h-[540px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {
        ChatMessages.map((c,i) => (
        <ChatMessage key={i} name={c.name} message={c.message}/>
        ))
        }
        </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={
        (e)=>{
            e.preventDefault();
            console.log("On form submit", liveMessage);
            dispatch(addMessage({
                name: "Aman Bansal",
                message: liveMessage,
            }))
            setLiveMessage("");
        }
    }>
        <input type="text" className='px-2 w-80' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat