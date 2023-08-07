import {Box,Button,Card,CardBody,Image,Text} from '@chakra-ui/react'
import axios from 'axios'

export default function Cards({change,setChange,ele}){

    function Buy(){
        axios.delete(`https://mock-3-backend.onrender.com/browse/${ele._id}`)
        .then(res=>{
            setChange(change+1)
        })
        .catch(console.log("error"))
    }
    // console.log(ele._id)
    return (
        <Card key={ele.id}>
            <CardBody>
                <Box>
                    <Image src={ele.image} alt={ele.name}/>
                </Box>
                <Box>
                <Text>{ele.category}</Text>
                <Text>{ele.description}</Text>
                <Text>Location: {ele.location}</Text>
                <Text>Posted On: {ele.postedAt}</Text>
                <Text>RS: {ele.price} /-</Text>
                </Box>
                <Button onClick={()=>{Buy()}}>BUY</Button>
            </CardBody>
        </Card>
    )
}