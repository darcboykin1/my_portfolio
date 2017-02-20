import React, { Component } from 'react';
import './App.css';
import Head from './Head';
import Skills from './skills';
import Projects from './Projects';
import axios from 'axios';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    projects:{}
  }

  }

  //end of the constructor() method

  get(){
    axios.get("https://portfolio-917bc.firebaseio.com/skills/.json")
    .then((response)=>{

    })
  }

  //end of the get() method

  componentDidMount(){
    this.get();
  }

  //end of the componentDidMount() method

  render() {
    return (
      <div>
        <Head/>
        <Skills/>
        <Projects/>
      </div>
    );
  }

  //end of the render() method

}

export default App;
