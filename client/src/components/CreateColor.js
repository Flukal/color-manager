import React from 'react'
// import axios from 'axios'

function CreateColor({ onSubmit, onChange }) {
    // const [name, setName] = useState()
    // const [hex, setHex] = useState()

    // async function onSubmit(e) {
    //     e.preventDefault()

    //     try {
    //         await axios.post('/colors', props.state)
    //         console.log('The color was created!')
    //     } catch (err) {
    //         console.log('Ops, the color was not created!')
    //     }
    // }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type='text' name='name' placeholder='Insert Color Name ' required />
            <input onChange={onChange} type='text' name='hex' placeholder='Insert Color Hex ' required />
            <button className='btn'>Create Color</button>
        </form>
    )
}

export default CreateColor
