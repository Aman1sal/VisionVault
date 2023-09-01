import React from 'react'

const VideoCard = ({info}) => {
      if (!info) {
    return <div>Loading...</div>; // You can customize this message or UI as needed
  }

  // Check if 'snippet' is defined within 'info'
  if (!info.snippet) {
    return <div>Invalid data format: 'snippet' is missing.</div>;
  }
    const{ snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;

    return (
    <div className='p-2 m-2 w-72 shadow-sm'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;