import React, { useState, useEffect } from 'react'
import CreateColor from './components/CreateColor'
import ListColors from './components/ListColors'
import Message from './components/Message'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
    const [colors, setColors] = useState([])
    const [message, setMessage] = useState([])
    const [state, setState] = useState({
        name: '',
        hex: '',
    })

    useEffect(() => {
        async function FetchColors() {
            const res = await axios.get('/colors')
            console.log(res.data)
            setColors(res.data)
        }
        FetchColors()
    }, [])

    async function handleDelete(id, e) {
        e.preventDefault()
        console.log(id)
        try {
            await axios.delete(`/colors/${id}`)
            console.log('Color deleted!')
            addMessage('Color deleted!')
        } catch (err) {
            console.log('Color not deleted!')
            addMessage('Color not deleted!')
        }

        const hideColor = colors.filter((color) => color.id !== id)
        setColors(hideColor)
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
            await axios.post('/colors', state)
            console.log('Color created!')
            addMessage('Color created!')
        } catch (err) {
            console.log('Color not created!')
            addMessage('Color not created!')
        }

        e.target.reset()
    }

    function addMessage(msg) {
        setMessage((prev) => prev.concat(msg))
    }

    return (
        <div>
            <header>
                <h1>Colors Manager</h1>
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
