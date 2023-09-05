import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index element={<News key="general" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='general'/>} />
            <Route path="business" element={<News key="business" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='business'/>} />
            <Route path="entertainment" element={<News key="entertainment" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='entertainment'/>} />
            <Route path="health" element={<News key="health" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='health'/>} />
            <Route path="science" element={<News key="science" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='science'/>} />
            <Route path="sports" element={<News key="sports" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='sports'/>} />
            <Route path="technology" element={<News key="technology" pageSize={9} country='in' apiKey="400b694a61bf4f39854157d3cfa423e6" category='technology'/>} />
          </Routes> 
        </div>
      </BrowserRouter>
    );
  }
}


