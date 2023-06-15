import React from 'react'
import {Route , Routes, Navigate} from 'react-router-dom'
// import Home from '../pages/Home'
// import Tours from '../pages/Tours'
// import Login from '../pages/Login'
// import ToursDetails from '../pages/ToursDetails'
// import Register from '../pages/Register'
// import SearchResult from '../pages/SearchResult'
// import ThankYou from '../pages/ThankYou'
import Homes from '../components/Home/Homes'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Homes/>}/>
        {/* <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<ToursDetails/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tour/search' element={<SearchResult/>}/> */}
    </Routes>
  )
}

export default Routers
