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
            <Detail company={this.props.company}/>
            <SubTitle icon="definition" title="保障计划"/>
            <Payment/>
            <SubTitle icon="documents" title="适合人群" />
            <Feature/>
             <SubTitle icon="documents" title="产品特色" />
            <UlList company={this.props.company}/>
          </div>
        );
    };
}