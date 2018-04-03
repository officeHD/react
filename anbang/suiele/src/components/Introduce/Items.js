import React,{Component} from 'react'
import SubTitle from './SubTitle'
import Detail from './Detail'
import Payment from './Payment'
import Conditions from './Conditions'
import Feature from './Feature'
 
export default class Instruction extends Component {
     constructor(props){
        super(props);   
    }
    render() {
        return (
           <div>
            <Detail/>
            <SubTitle icon="definition" title="保险责任"/>
            <Payment/>
            <SubTitle icon="documents" title="产品特色" />
            <Feature/>
            <SubTitle icon="documents" title="常见问题" />
            <Conditions/>
          </div>
        );
    };
}