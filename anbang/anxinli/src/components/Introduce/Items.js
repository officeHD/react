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
            <SubTitle icon="definition" title="相关费用"/>
            <Payment/>
            <SubTitle icon="documents" title="保障范围" />
             <Conditions/>
            <SubTitle icon="documents" title="产品特色" />
            <Feature/>
            
          </div>
        );
    };
}