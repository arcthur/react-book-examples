import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Content from '../home/components/Content.js';

const appEle = document.getElementById('demoApp');
const microdata = JSON.parse(appEle.getAttribute('data-microdata'));
let mydata = JSON.parse(appEle.getAttribute('data-mydata'));
mydata.nick += ', then client reRender ';

render(<Content mydata={mydata} microdata={microdata} /> , appEle);
