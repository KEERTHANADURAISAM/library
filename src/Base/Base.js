import React from 'react'
import {
    AppBar,
    Avatar,
    Grid,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import SchoolIcon from "@mui/icons-material/School";
  import "./Base.css";
  import { useNavigate } from "react-router-dom";

export default function Base({children}) {
    const navigate=useNavigate();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Box>
            <AppBar position="relative">
              <Toolbar variant="dense" >
                <Typography >
                 
                  <lable className="head"><SchoolIcon /> Welcome To Library Management</lable>
                
                </Typography>
                <div className="btn">  
                <span onClick={()=>navigate('/')}>Home</span>
                <span  onClick={()=>navigate('/studentviewbooks')}> Student</span>
                <span  onClick={()=>navigate('/allbooks')}> Admin</span>
                <Avatar alt="K"  sx={{color:'black',backgroundColor:'white'}}  /> 
               
                    </div> 
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <div className='child'>
            {children}
        </div>
       
      </Grid>
    </div>
  )
}

