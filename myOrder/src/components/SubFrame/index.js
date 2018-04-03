import React, {Component} from 'react';
import TitleBar from '../public/TitleBarFrame';
import IFrame from './IFrame';
import { componies } from '../asset/json/appInfo.json';

export default class App extends Component {
     constructor(props){
        super(props);
        this.state = {
          company: localStorage.InsuranceCom
        };
       
    }
    //设置meta标签的viewPort，用以平衡antd
    setViewPort(scale){
        let doc = window.document
        let metaEl = doc.querySelector('meta[name="viewport"]');
        if (!metaEl) {
            metaEl = doc.createElement('meta');
            metaEl.setAttribute('name', 'viewport');
            doc.head.appendChild(metaEl);
        }
        metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`);
    }

    componentDidMount() {      
        this.setViewPort('1')
    };

    componentWillUnmount() {
        this.setViewPort('0.5')
    };

    render() {
       let company = componies[this.state.company-1];
        return (
            <div>
                <TitleBar title={company.product} />
                <IFrame />
            </div>
        )
    };
}