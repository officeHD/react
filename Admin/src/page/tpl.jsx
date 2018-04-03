import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/public/Sidebar.jsx';
import Topbar from '../component/public/Topbar.jsx';
import Title from '../component/public/Title.jsx';

import '../component/asset/less/component/Rightcontainer.less';

ReactDOM.render(
    <div>        
        <Sidebar cKey="index"/>
        <div id="rightWrap">
            <Topbar />
            <div id="conWrap">
            	<Title name="首页" />
            </div>            
        </div>
    </div>
    , document.querySelector('#init')
)