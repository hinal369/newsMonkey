import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index element={<News key="general" pageSize={9} country='in' apiKey={this.apiKey} category='general'/>} />
            <Route path="business" element={<News key="business" pageSize={9} country='in' apiKey={this.apiKey} category='business'/>} />
            <Route path="entertainment" element={<News key="entertainment" pageSize={9} country='in' apiKey={this.apiKey} category='entertainment'/>} />
            <Route path="health" element={<News key="health" pageSize={9} country='in' apiKey={this.apiKey} category='health'/>} />
            <Route path="science" element={<News key="science" pageSize={9} country='in' apiKey={this.apiKey} category='science'/>} />
            <Route path="sports" element={<News key="sports" pageSize={9} country='in' apiKey={this.apiKey} category='sports'/>} />
            <Route path="technology" element={<News key="technology" pageSize={9} country='in' apiKey={this.apiKey} category='technology'/>} />
          </Routes> 
        </div>
      </BrowserRouter>
    );
  }
}


