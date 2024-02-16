import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {baseUrl} from '../../config'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import List from '../../components/List'

export default function NewTodo() {
    const [title, setTitle] = useState("") 

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        createTodo()
    }

    const createTodo = async() => {
            try {
                const response = await axios.post( baseUrl + "/todos", {title})
                
                navigate("/")
            } catch (error) {
                console.info(error)
            }

    }


  return (

<form onSubmit={handleSubmit}>

<Input/>
<Button/>

</form>

  )
}
