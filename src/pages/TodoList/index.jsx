import React, { useState,useEffect } from 'react'
import axios from 'axios'
import List from '../../components/List'

export default function TodoList() {

    const [list,setList] = useState([])

    const baseUrl = "http://localhost:3000"

    const fetchList = async () =>{
        try {
            const response = await axios.get(baseUrl + '/todos')
            setList(response.data)
        } catch (error) {
            console.info(error)
        }
    }

    useEffect(() =>{
        fetchList()
    },[])


  return (
    <div>
     <List test={list} />

    </div>
  )
}
