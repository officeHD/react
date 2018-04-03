import React from 'react';
import { Button } from 'antd';
import '../asset/less/component/TitleBar.less';
 

/*页面标题组件，可传参*/
export default class TitleBar extends React.Component {
    constructor(props) {
        super(props);       
    }       

    render() {  
        return (
            <div className="title" >
                <h2>
                    {this.props.name}
                    <span>（{this.props.titletips}）</span>
                </h2>
                <Button type="primary">{this.props.btnname}</Button>
            </div>
        )
    }
} 