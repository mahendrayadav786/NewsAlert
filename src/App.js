
import './App.css';

import React from 'react'

import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


 const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API;
  
    return (
      
      <Router>
      <div>

<NavBar/>

<Routes>
  <Route path='/' element={<News key="general"  apiKey = {apiKey} pageSize = {5}  country ="in" category = "general"/>} />
  <Route path='/business' element={<News key="busines" apiKey = {apiKey}  pageSize = {5}  country ="in" category = "business"/>} />
  <Route path='/entertainment' element={<News key="entertainmen" apiKey = {apiKey}  pageSize = {5}  country ="in" category = "entertainment"/>}/>
  <Route path='/health' element={<News key="healt"  pageSize = {5} apiKey = {apiKey}  country ="in" category = "health"/>} />
  <Route path='/science' element={<News key="science"  pageSize = {5} apiKey = {apiKey}  country ="in" category = "science"/>} />
  <Route path='/technology' element={<News key="technology" apiKey = {apiKey}  pageSize = {5}  country ="in" category = "technology"/>} /> 
  <Route path='/sports' element={<News key="sports" apiKey = {apiKey}  pageSize = {5}  country ="in" category = "sports"/>} />      
      
      </Routes>

      </div>

</Router>

      
    )
  
}

export default App
