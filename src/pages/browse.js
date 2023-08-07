import {Box, Button, Flex, Grid, Input, Select} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from '../components/card'
import { useNavigate } from 'react-router-dom'

export default function Browse(){
    const[data,setData]=useState([])
    const[category,setCategory]=useState("")
    const[date,setDate]=useState("")
    const[q,setQ]=useState("");

    const[change,setChange]=useState(0);
    
    var navigation = useNavigate()
    useEffect(()=>{
        axios.get(`https://mock-3-backend.onrender.com/browse?q=${q}&category=${category}&date=${date}`)
        .then(res=>{console.log(res.data);setData(res.data)})
    },[q,category,date,change])

    function nav(){
        navigation("/post")
    }

    return (
        <Box>
            <Flex justifyContent={"space-around"} gap={5} p={"3%"}>
                <Input placeholder='Search' onChange={(e)=>{setQ(e.target.value)}}/>
                <Select onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="">Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                </Select>
                <Select onChange={(e)=>{setDate(e.target.value)}}>
                    <option value="">Date</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
                <Button onClick={nav}>POST</Button>
            </Flex>
            <Grid templateColumns={"repeat(3, 1fr)"} gap={5}>
            {
                data.map((ele)=>{
                    return <Cards change={change} setChange={setChange} ele={ele}/>
                })
            }
            </Grid>
        </Box>
    )
}