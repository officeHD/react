import React from 'react';
import ReactDOM from 'react-dom';
import Search  from '../component/indexpage/InputArea.jsx';
import Head from '../component/indexpage/head.jsx';
import Tables from '../component/indexpage/Tables.jsx';
import { getStaff } from '../component/APIUtils';
ReactDOM.render(
 
    <div>        
        <Head/>
        <Search/>
        <Tables/>   
    </div>
    , document.querySelector('#init')
)