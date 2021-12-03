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

    const handleDelete = async (id, e) => {
        e.preventDefault()

        try {
            await axios.delete(`/colors/${id}`)
            addMessage('Color deleted!')

            fetchColors()
        } catch (err) {
            addMessage('ERROR: color not deleted!')
        }
    }

    const onChange = (e) => {
        const value = e.target.value

        setState({
            ...state,
            [e.target.name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            if (!state.hex.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
                addMessage(`Error: ${state.hex} not a valid HEX code`)
            } else {
                await axios.post('/colors', state)

                addMessage('Color ' + state.name + ' created with HEX value: ' + state.hex)
                e.target.reset()
            }
        } catch (err) {
            addMessage('Error: color not created!')
        }

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
