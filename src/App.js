
import './App.css';

import React, { Component } from 'react'

import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>

<NavBar/>

<Routes>
  <Route path='/' element={<News key="general" pageSize = {5}  country ="in" category = "general"/>} />
  <Route path='/business' element={<News key="busines" pageSize = {5}  country ="in" category = "business"/>} />
  <Route path='/entertainment' element={<News key="entertainmen" pageSize = {5}  country ="in" category = "entertainment"/>}/>
  <Route path='/health' element={<News key="healt"  pageSize = {5}  country ="in" category = "health"/>} />
  <Route path='/science' element={<News key="science"  pageSize = {5}  country ="in" category = "science"/>} />
  <Route path='/technology' element={<News key="technology"  pageSize = {5}  country ="in" category = "technology"/>} /> 
  <Route path='/sports' element={<News key="sports" pageSize = {5}  country ="in" category = "sports"/>} />      
      
      </Routes>

      </div>

</Router>

      
    )
  }
}

