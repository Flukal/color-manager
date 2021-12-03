import React from 'react'

function CreateColor({ onSubmit, onChange }) {
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type='text' name='name' placeholder='Insert Color Name ' required />
            <input onChange={onChange} type='text' name='hex' placeholder='Insert Color Hex ' required />
            <button className='btn'>Create Color</button>
        </form>
    )
}

export default CreateColor
