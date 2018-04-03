import React, {Component} from 'react';
import style from '../asset/css/share.less';
 
 
export default class Backpage extends Component {
    constructor(props){
        super(props); 
          this.state = this.getData();  
          this.handelClick=this.handelClick.bind(this);  
    }
     getData() {
      return {
        show:false,
        
      }
    };
    handelClick(){
    	this.setState({
            show:!this.state.show     
        });
    }
    render() {
    	let planData=this.props.planData;
    	let Trlist=planData.insuranceInfo.map((insure ,index) => { 
          return <tr key={index}>
                <td>{insure.insuranceName}</td>
                <td>{insure.amnt}</td>
               
                <td>{insure.payendyear}</td>
                 <td>{insure.subPrem}</td>
          </tr>
      	})
       	return (
	        <div className={style.person}>
		         <dl className={style.insureInfo}>
		         	<dt>保障计划：{planData.sex}{planData.age}</dt>
		         	<dd>
						<div className={style.bLine}><span className={style.att}>{planData.payendyear}</span><br/>交费期限
						</div>
					</dd>
					<dd>
						<div>至<span className={style.att}>75</span>岁 <br/>保险期限
						</div>
					</dd>
					<dd>
						<div className={style.bLine}><span className={style.att}>{planData.amt}</span>元<br/>保险金额
						</div>
					</dd>
					<dd>
						<div><span className={style.att}>{planData.prem}</span>元<br/>首年保费
						</div>
					</dd>
		         </dl>

		         <table className={this.state.show?style.insureInfo_table:style.insureInfo_table_hide} >
					<tbody>
						<tr>
								<td>投保险种</td>
								<td>保险金额</td>
								
								<td>交费期限</td>
								<td>首年保费</td>
								 
						</tr>
						{Trlist}
						 
						 
					</tbody>
				</table>
		   		 <div className={style.wrapup} >
				    <p className={style.wrapupin}>
				        <b onClick={this.handelClick}>
				              <img src={require(`../asset/img/arrow.png`)} />
				        </b>
				    </p>
				</div>
	   		</div>

        )
    };
}