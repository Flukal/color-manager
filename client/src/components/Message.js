import React from 'react'

function Message({ message }) {
    return (
        <>
            {message.map((msg, index) => {
                return (
                    <div key={index} className='message'>
                        <div>{msg}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Message
