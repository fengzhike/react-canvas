'use strict';

import React from 'react';

import { Router, Route, hashHistory } from 'react-router';
import SaveImg from './saveImg.js'
import CanvasCon from './canvasCon.js'

export default class MainComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <Router history={hashHistory}>
            <Route path='/' component={CanvasCon}></Route>
            <Route path='/preview:id' component={SaveImg}></Route>
        </Router>
      )
    }
}
