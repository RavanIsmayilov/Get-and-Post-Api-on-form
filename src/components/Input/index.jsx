import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {baseUrl} from '../../config'
import { useNavigate } from 'react-router-dom'

export default function Input() {
    const [title, setTitle] = useState("") 

  return (
<>        

    <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

</>

  )
}

