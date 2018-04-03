import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Content from './Content';
import InsuranceStores from '../../stores/InsuranceStore';
 
import Bottom from './Bottom';
export default class App extends Component {
     constructor(props){
        super(props);
        this.state = {
          stakeholder: InsuranceStores.getStakeholder(),
        }
    }
    render() {
        return (
            <div>
                <TitleBar title="乐无忧1号少儿两全保险（分红型）" />
                 <Content stakeholder={this.state.stakeholder}/>
                 <Bottom />
            </div>
        )
    };
}