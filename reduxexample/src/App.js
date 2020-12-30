import React, {Component } from 'react';
import './App.css';
import {Provider } from 'react-redux';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';
import {createStore, applyMiddleware} from  'redux';

const store = createStore(()=> [], {},applyMiddleware());

class App extends Component {
  render (){
    return (
      <Provider store={store}>
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}
}

export default App; //left off at minute 39 of redux crash course video