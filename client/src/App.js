import React, { useState, useEffect } from 'react'
import CreateColor from './components/CreateColor'
import ListColors from './components/ListColors'
import Message from './components/Message'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'

function App() {
    const [colors, setColors] = useState([])
    const [message, setMessage] = useState([])
    const [state, setState] = useState({
        name: '',
        hex: '',
    })

    useEffect(() => {
        fetchColors()
    }, [])

    async function handleDelete(id, e) {
        e.preventDefault()

        try {
            await axios.delete(`/colors/${id}`)
            console.log(`Color deleted!`)
            addMessage('Color deleted!')
        } catch (err) {
            console.log(`Cannot delete color with id: ${id}`, err)
            addMessage('ERROR: color not deleted!')
        }

        fetchColors()
    }

    function onChange(e) {
        const value = e.target.value

        setState({
            ...state,
            [e.target.name]: value,
        })
    }

    async function onSubmit(e) {
        e.preventDefault()

        try {
            if (!state.hex.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
                console.log(`${state.hex} is not a valid hex code`)
                addMessage('Not a HEX code')
            } else {
                await axios.post('/colors', state)
                console.log('Color created!')
                addMessage('Color ' + state.name + ' created with HEX value: ' + state.hex)
            }
        } catch (err) {
            console.log('ERROR while creating color: ', err)
            addMessage('Error: color not created!')
        }

        e.target.reset()

        fetchColors()
    }

    const fetchColors = async () => {
        const res = await axios.get('/colors')
        setColors(res.data)
    }

    const addMessage = (msg) => {
        setMessage((prev) => prev.concat(msg))
    }

    return (
        <div>
            <header>
                <h1>Color Manager</h1>
            </header>
            <main>
                <Message message={message} />
                <CreateColor onChange={onChange} onSubmit={onSubmit} />
                <ListColors colors={colors} handleDelete={handleDelete} />
            </main>
        </div>
    )
}

export default App
