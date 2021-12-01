import React from 'react'

function Message(props) {
    return (
        <>
            {props.message.map((msg, index) => {
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
