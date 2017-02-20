import React, { Component } from 'react';
import './App.css';


class Head extends Component {
  render() {
    return (
      <div className="uk-container uk-container-center containment">
      <img src="http://placehold.it/200x200" alt="self" id="me" className="uk-thumbnail uk-overlay-hover uk-border-circle"/>
      </div>
    );
  }
}

export default Head;
