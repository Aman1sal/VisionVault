import React from 'react'

const commentsData = [
    {
        name: "Aman bansal",
        text: "lorem ipsum dolor sit ammet",
        replies: [
            {
                name: "Aman bansal",
                text: "lorem ipsum dolor sit ammet",
                replies: [
                    {
                        name: "Aman bansal",
                        text: "lorem ipsum dolor sit ammet",
                        replies: [
                            {
                                name: "Aman bansal",
                                text: "lorem ipsum dolor sit ammet",
                                replies: [],
                            },
                            {
                                name: "Aman bansal",
                                text: "lorem ipsum dolor sit ammet",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Aman bansal",
        text: "lorem ipsum dolor sit ammet",
        replies: [],
    },
    {
        name: "Aman bansal",
        text: "lorem ipsum dolor sit ammet",
        replies: [],
    },
    {
        name: "Aman bansal",
        text: "lorem ipsum dolor sit ammet",
        replies: [
            {
                name: "Aman bansal",
                text: "lorem ipsum dolor sit ammet",
                replies: [],
            },
            {
                name: "Aman bansal",
                text: "lorem ipsum dolor sit ammet",
                replies: [
                    {
                        name: "Aman bansal",
                        text: "lorem ipsum dolor sit ammet",
                        replies: [],
                    },
                    {
                        name: "Aman bansal",
                        text: "lorem ipsum dolor sit ammet",
                        replies: [
                            {
                                name: "Aman bansal",
                                text: "lorem ipsum dolor sit ammet",
                                replies: [],
                            }
                        ],
                    }
                ],
            },
        ],
    }
]

const Comment = ({data}) =>{
    const {name, text, replies} = data;
    return (
    <div className='flex items-center mt-4 my-1'>
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" className='h-12' alt="user" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
    );
};

const CommentsList = ({comments}) =>{
    return comments.map((comment, index)=>(
        <div  key={index}>
        <Comment data = {comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer