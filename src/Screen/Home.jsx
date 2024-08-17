import React, { useEffect, useState } from 'react'
import Tables from '../component/Tables'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((res)=> setUserData((res.data)) )
    .catch((err)=> console.log((err)) );

  },[]);
    console.log(userData);

    return (

    <div>
        <h1 style={{textAlign:"center"}} >Users</h1>
        <Button  onClick={()=> navigate("/createuser")}>Create User</Button>
        <br /><br />
        <Tables  data={userData}/>
    </div>
  )
}

export default Home