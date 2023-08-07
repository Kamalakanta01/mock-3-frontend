import {Routes,Route} from 'react-router-dom'
import Browse from '../../pages/browse'
import Post from '../../pages/post'

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Browse/>}/>
            <Route path='/post' element={<Post/>}/>
        </Routes>
    )
}