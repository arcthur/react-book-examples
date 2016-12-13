import React from 'react';
import { render } from 'react-dom';
import Iso from './Iso.js';
import { appEle, microdata, mydata } from './common/Appoint.js';

render(<Iso microdata={microdata} mydata={mydata} isServer={false} />, appEle);
