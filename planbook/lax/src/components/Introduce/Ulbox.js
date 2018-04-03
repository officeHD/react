import React, {Component} from 'react';
import {Picker,List } from 'antd-mobile';
import ShowController from './ShowController'
import SelectorSex from '../public/SelectorSex'
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import style from '../asset/css/Introduce.less';
 
export default class Ulbox extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this.onClickHandle=this.onClickHandle.bind(this); 
    }
    getData() {
      return {
        options:['男','女'],
        selected:"男",  
      }
    };
    onClickHandle(text){
        this.setState({
             selected:text.text,
        }) 
    }
    render() {
        
        return (
             <div> 
                <ul className={style.content_ul}>
                    <li className={style.list}>
                        <label>性别</label>
                        <SelectorSex selectedOption={this.props.selected}  options={this.state.options} onClickHandle={this.props.onClickHandle} />
                    </li>
                    {this.props.name? 
                        <li className={style.list}>
                            <label>姓名</label>
                            <input 
                                type="text"
                                placeholder="" 
                                value={this.props.stakeholder.ReciveName} 
                                onChange={(event, type) => {InsuranceActionCreators.handleChange(event, 'ReciveName')}}
                            />
                        </li>:<li className={style.list} >
                            <List>
                                <Picker 
                                    data={this.props.scope} 
                                    cols={1}  
                                    title="年龄" 
                                    value={this.props.age}
                                    onChange={(val) => {this.props.onChangePick(val)}}    
                                >
                                    <div>
                                        <label>年龄</label>
                                        <input
                                            placeholder="0岁"
                                            readOnly="readonly"
                                            value={this.props.agetext}
                                        /><ShowController show={this.props.show}/>
                                    </div>
                                </Picker>
                             </List>
                        </li>
                    }
                </ul>
            </div>   
        )
    };
}