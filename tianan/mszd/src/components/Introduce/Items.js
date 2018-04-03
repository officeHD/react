import React,{Component} from 'react'
import SubTitle from './SubTitle'
import Detail from './Detail'
import Payment from './Payment' 
import Feature from './Feature'
import UlList from './UlList'

 
export default class Instruction extends Component {
     constructor(props){
        super(props);   
    }
    render() {
        return (
           <div>
            <Detail company={this.props.company} stakeholder={this.props.stakeholder}/>
            <SubTitle icon="definition" title="高额保障，性价比高"/>
            <Payment/>
            <SubTitle icon="documents" title="学生保障，健康成长" />
            <Feature/>
            <UlList company={this.props.company}/>
          </div>
        );
    };
}