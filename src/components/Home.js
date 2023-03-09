import   React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
    let navigate=useNavigate()
    let student=()=>{
      navigate('./home/dashboard')
    }
  return (
        <div>
        <div className='img'>
        <h1>Welcome To Library Management System</h1>
        <img src="https://editor.analyticsvidhya.com/uploads/66982lms.jpg"></img>
        </div>
        <div >
        <Button variant='contained' className='btn' onClick={student}>Let's Start!</Button>
       </div>
       </div>
  )
}
