import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate()
    const [createData , setCreateData] = useState({
        name:"",
        email:"",
        username:"",
        phone:""
    });

    const handleSubmite = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users", createData)
        .then((response) => alert("User Create Successfully"))
        .catch((err)=>alert("errore"))
        navigate("/")
    }


  return (
   <form onSubmit={handleSubmite}>
    <Paper elevation={24} sx={{margin:20, padding:5}}>
        <Typography variant='h4' sx={{marginBottom:5}}>
            Create User
        </Typography>
        <TextField onChange={(e)=>setCreateData({...createData,name:e.target.value})} sx={{mb:3}} fullWidth label="Name" />
        <TextField onChange={(e)=>setCreateData({...createData,email:e.target.value})} sx={{mb:3}} fullWidth label="Email" />
        <TextField onChange={(e)=>setCreateData({...createData,username:e.target.value})} sx={{mb:3}} fullWidth label="User Name" />
        <TextField onChange={(e)=>setCreateData({...createData,phone:e.target.value})} sx={{mb:3}} fullWidth label="Phone" />
<Button type="submit" variant="contained" color="primary">Create</Button>
            


    </Paper>
   </form>
  )
}

export default CreateUser