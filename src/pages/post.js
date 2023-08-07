import {Box, Input, Flex, Select, Button, Stack} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Postt(){
    const[name,setName]=useState("")
    const[description,setDescriotion]=useState("")
    const[category,setCategory]=useState("")
    const[image,setImage]=useState("")
    const[date,setDate]=useState("")
    const[loc,setLoc]=useState("")
    const[price,setPrice]=useState(0)

    var navigation=useNavigate()

    function sell(){
        axios.post(`https://mock-3-backend.onrender.com/post`,{
            name:name,
            description:description,
            category:category,
            image:image,
            postedAt:date,
            location:loc,
            price:price
        })
        .then(res=>{
            console.log("res")
            navigation("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <Stack>
            <Input placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
            <Input placeholder='description' onChange={(e)=>{setDescriotion(e.target.value)}}/>
            <Select onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="">Category</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="other">Other</option>
            </Select>
            <Input placeholder='Image URL' onChange={(e)=>{setImage(e.target.value)}}/>
            <Input placeholder='Location' onChange={(e)=>{setLoc(e.target.value)}}/>
            <Input type='date' onChange={(e)=>{setDate(e.target.value)}}/>
            <Input type='number' placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}}/>
            <Button onClick={sell}>POST</Button>
        </Stack>
    )
}