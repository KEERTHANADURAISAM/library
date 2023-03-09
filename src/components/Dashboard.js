import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Base from '../Base/Base'
import "./Dashboard.css";

export default function Dashboard() {
    const navigate=useNavigate();
  return (
    <Base>
    <Grid container>
<Grid item xs={6}>
  <Box>
<Card onClick={()=>navigate('/studentviewbooks')} className='card'>      
        <CardMedia
        sx={{ height: 240 ,width: 360 }} 
        image="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg"
        title="green iguana"
      />
      <CardContent>
<h1>STUDENT</h1>
        </CardContent>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={6}>
  <Box >
    <Card onClick={()=>navigate('/addbooks')} className='card'>
    <CardMedia
        sx={{ height: 240 ,width: 360 }} 
        image="https://pdf2xl.com/wp-content/uploads/2013/04/067.jpg"
        title="green iguana"
      />
    <CardContent sx={{padding:1}}>  
    <h1>ADMIN </h1>
    </CardContent>
    </Card>  
    </Box>
</Grid>
    </Grid>
    </Base>
  )
}
