import React, {Component} from 'react'
import style from '../asset/css/introduce.less'

export default class Feature extends Component {
    
    render(){ 
     
      return (
     
	        <div className={style.feature_title}>
	        	<div className={style.feature_title_a}> 
	        		<span className={style.num}>{this.props.id}
	        		</span>
	        		<label>
	        		{this.props.name}
	        		</label>
		         
		        </div>
		       
		        <p>
		        	{this.props.article}
		        </p> 
	        </div> 
	    
      )
    }
}