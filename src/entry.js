
'use strict';
import React from 'react';
import ReactDom from 'react-dom';

//引入样式文件
import './styles/app.scss';
//引入组件
import MainComponent from './components/index.js';


//最终渲染
ReactDom.render(< MainComponent/>, document.getElementById('app'));
