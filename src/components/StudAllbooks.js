import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import Base from '../Base/Base'
import './StudAllbooks.css';

export default function StudAllbooks() {
    const navigate=useNavigate()
    const [student,setStudent]=useState([])
    const[isloading,setLoading]=useState(false)
useEffect(()=>{
loadStudent()
},[]);
const loadStudent=async()=>{
    setLoading(true)
let student=await axios.get("https://63ff3f15571200b7b7d92b4b.mockapi.io/books")
setStudent(student.data)
setLoading(false)

}
  return (
    <Base>
   
    <Grid container>
        <Grid item xs={12} sx={{my:5,mx:5}}>
        <Button variant='contained' onClick={()=>navigate('/home/dashboard')}>back to dashboard</Button>
            <Box className='container'>
                {isloading?<span>Loading...</span>:
                    
                <table>
                    <thead>
                    <tr>
                            <th>#SL</th>
                            <th>Book Id</th>
                            <th>Name</th>
                            <th>Author_Name</th>                    
                            <th>Release_Date</th>
                            <th>Action</th>
                          </tr>
                    </thead>
                    <tbody>
                    {student.map((student,idx)=>(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{student.bookid}</td>
                            <td>{student.name}</td>
                            <td>{student.author}</td>
                            <td>{student.release}</td>
                            <td>
                            <Link to={`/books/view/${student.id}`}>
                            <button variant='contained' className='btn-color2'>View</button></Link>
                            
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>           
}
            </Box>
        </Grid>
    </Grid>
    </Base>
  )
}
