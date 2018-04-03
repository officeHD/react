import React from 'react';
import TitleBar from '../public/TitleBar.jsx';
import '../asset/less/component/Rightcontainer.less';

export default class Head extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            pagename:'后援人员管理',
            titletips: '管理所有后援人员和查询',
            btnname:'新增'
        };       
    }     
    render() { 
        return (
            <div id="conWrap">
              <TitleBar name={this.state.pagename} titletips={this.state.titletips} btnname={this.state.btnname}/>
            </div> 
        )
    }
} 