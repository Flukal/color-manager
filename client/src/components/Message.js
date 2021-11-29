import React from 'react'

function Message(props) {
    return (
        <>
            {props.message.map((msg, index) => {
                return (
                    <div key={index} className={`message ${msg === 'Color created!' || msg === 'Color deleted!' ? 'message--success' : 'message--error'}`}>
                        <div>{msg}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Message
