import React, {Component}  from 'react'
import style from '../asset/css/introduce.less'
import { Icon } from 'antd-mobile'

export default class ShowController extends Component { 
      
    render() {
        return (
            <span onClick={this.props.onToggleShow} className={style.show_controller}>
            	<span className={style.show_tip}>
            		{this.props.title}
            	</span>
			    
			    <Icon type={require(`../asset/svg/${this.props.show ? 'up' : 'down'}.svg`)}/>
		  	</span>
        );
    };

 }

 