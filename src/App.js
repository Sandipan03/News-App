// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {Routes,Route} from 'react-router-dom';
export default class App extends Component {
  // apikey= process.env.REACT_APP_NEWS_API;
  state = {
      progress : 0,
  
  }
  setProgress= (progress) =>{
    this.setState({
      progress : progress 
    })
  }
  pg=15;
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
            <Route   path="/"  element={<News setProgress={this.setProgress}  key="general" pageSize={this.pg} country="in" category="general"/>}></Route>
            <Route  path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pg} country="in" category="business"/>}></Route>
            <Route  path="/entertainment"  element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pg} country="in" category="entertainment"/>}></Route>
            <Route  path="/general"  element={<News setProgress={this.setProgress}  key="general" pageSize={this.pg} country="in" category="general"/>}></Route>
            <Route  path="/health"  element={<News setProgress={this.setProgress}  key="health" pageSize={this.pg}  country="in" category="health"/>}></Route>
            <Route  path="/sports"  element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pg} country="in" category="sports"/>}></Route>
            <Route  path="/science"  element={<News setProgress={this.setProgress}  key="science" pageSize={this.pg} country="in" category="science"/>}></Route>
            <Route  path="/technology"  element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pg} country="in" category="technology"/>}></Route>
        </Routes>
        
      </div>
    )
  }
}


