import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center p-2 shadow-sm'>
            <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="user" className='h-8' />
            <span className='px-2 font-bold'>{name}:</span>
            <span>
                {message}
            </span>
        </div>
        
    )
}

export default ChatMessage