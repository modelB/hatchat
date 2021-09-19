import React, { Component, useState } from 'react';
import axios from 'axios';

const App = (props) => {
    return (
      <div id="app">
        <div id="toprow">
        <button id="start">Start a Call</button>
        <img id="logo" src="./logo.gif" alt="logo"/>
        <button>Join a Call</button>
        </div>
        <div id="bottomrow">
          <input type="text" placeholder="Enter Call ID if joining" />
        </div>
      </div>
    )
}

export default App;
