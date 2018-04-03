import React from 'react';
import { Button } from 'antd';
import { SearchTitle } from './SearchTitle';
import '../asset/less/component/search.less';
 

/*页面标题组件，可传参*/
export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);       
    }       

    render() {  
        return (
            <div className="search" >
               <SearchTitle/>
            </div>
        )
    }
} 