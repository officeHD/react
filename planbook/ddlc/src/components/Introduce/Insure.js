import React,{Component} from 'react'
import Message from './Message'
import Ulbox from './Ulbox'
import Plan from './Plan'
import Model from './Model'
import Submodel from './Submodel'
import Plantitle from './Plantitle'
import {Toast } from 'antd-mobile';
import style from '../asset/css/Introduce.less'
import InsuranceStore from '../../stores/InsuranceStore';
import {getInsuranceInfo,getSubInsuranceInfo} from '../APIUtils';
import InsuranceActionCreators from '../../actions/InsuranceActionCreators';
import QueueAnim from 'rc-queue-anim';



export default class Insure extends Component {
    constructor(props){
        super(props);
        this.state = this.getData(); 
        this.changeState=this.changeState.bind(this); 

        this.Mainhandeladd=this.Mainhandeladd.bind(this); 
        this.Mainhandeledit=this.Mainhandeledit.bind(this); 
        this.Mainhandeldelete=this.Mainhandeldelete.bind(this); 
        this.hideModel=this.hideModel.bind(this); 
        this.sureModel=this.sureModel.bind(this); 

        this.Subhandeledit=this.Subhandeledit.bind(this); 
        this.Subhandeldelete=this.Subhandeldelete.bind(this); 
        this.Subhandeladd=this.Subhandeladd.bind(this); 
        this.subhideModel=this.subhideModel.bind(this); 
        this.subsureModel=this.subsureModel.bind(this); 
        this.changesubState=this.changesubState.bind(this); 
        this.changesubState1=this.changesubState1.bind(this); 
       
        this.onClickHandleTbr=this.onClickHandleTbr.bind(this); 
        this.onClickHandleBbr=this.onClickHandleBbr.bind(this); 
        this.onClickHandleR=this.onClickHandleR.bind(this); 
        this.onInsuranceChange=this.onInsuranceChange.bind(this); 
    }
    getData() {
      return {
        bbr:false,
        onOrOff:"off",
        mainshow:false,
        mainaddshow:false,
        subaddshow:false,
        addshow:false,
        selectedTbr:"男",  
        selectedBbr:"男",  
        selectedR:"男", 
        stakeholder:InsuranceStore.getStakeholder(),
        sublist:false,
        subonOrOff:"off",
        sublist1:false,
        subonOrOff1:"off",
      }
    };
    onInsuranceChange() {
        this.setState({
            stakeholder: InsuranceStore.getStakeholder(),       //相关方数据集合
        });
    }
     componentDidMount() {      
        InsuranceStore.addChangeListener(this.onInsuranceChange);
        
    };

    componentWillUnmount() {
        InsuranceStore.removeChangeListener(this.onInsuranceChange);
        
    };
    changeState(){
        this.setState({
            bbr:!this.state.bbr,
            mainshow:false,
            onOrOff:this.state.onOrOff==="on"?"off":"on",
        })
         
    }
     //修改主险，附加险也删除
    Mainhandeledit(){
        this.setState({
            mainaddshow:true,
            addshow:false,
            
        })
    }
    //删除主险，附加险也删除
    Mainhandeldelete(){
        this.setState({
            mainshow:false,
             
        })
        InsuranceActionCreators.reset();
    }
    // 添加主险
    Mainhandeladd(){

        if(this.state.bbr){
            this.setState({
                mainaddshow:true,
            })
        }else{
            Toast.info("请添加投保人信息",1)
        }
       
    }
    //修改附加险
    Subhandeledit(){
        this.setState({
            subaddshow:true,
            subshow:false,
            
        })
    }
    //删除附加险
    Subhandeldelete(){
        this.setState({
            subaddshow:false,
            subshow:false,
            sublist:false,
            subonOrOff:"off",
            sublist1:false,
            subonOrOff1:"off"

        })
        InsuranceActionCreators.resetsub();
        
    }
    // 添加附加险
    Subhandeladd(){
        this.setState({
            subaddshow:true,
        }) 
    }
    // 取消
    hideModel(){
         this.setState({
            mainaddshow:false,
            
        })
    }
    sureModel(){
        if(this.state.stakeholder.amnt){
            getInsuranceInfo();
            this.setState({
                mainaddshow:false,//主险model显示
                mainshow:true,
            })
        }else{
            Toast.info("请输入份数",2)
        }
       
    }
     // 取消
    subhideModel(){
         this.setState({
            subaddshow:false,
            
        })
    }
    subsureModel(){
        getSubInsuranceInfo();
        
        this.setState({
            subaddshow:false,
            subshow:true,
        })
    }
    // 投保人性别
    onClickHandleTbr(text){
        this.setState({
             selectedTbr:text.text,
        }) 
        InsuranceActionCreators.changeTbrSex(text.text); 
    }

    onClickHandleBbr(text){
        this.setState({
             selectedBbr:text.text,
        })
        InsuranceActionCreators.changeBbrSex(text.text);  
    }
     onClickHandleR(text){
        this.setState({
             selectedR:text.text,
        })
        InsuranceActionCreators.changeReSex(text.text); 
    }
    changeBbrAge(text){
         InsuranceActionCreators.changeBbrAge(text)
    }
    changeTbrAge(text){
         InsuranceActionCreators.changeTbrAge(text)
    }

    changesubState(){
        InsuranceActionCreators.changeSubinsureA(this.state.sublist);
        this.setState({
            sublist:!this.state.sublist,
            subonOrOff:this.state.subonOrOff==="on"?"off":"on",
        }); 
    }
    changesubState1(){
        InsuranceActionCreators.changeSubinsureB(this.state.sublist1); 
        this.setState({
            sublist1:!this.state.sublist1,
            subonOrOff1:this.state.subonOrOff1==="on"?"off":"on",
        })
       
    }
    render() {
       
        return (
            <div className={style.content}>
               
                {this.state.mainaddshow?
                        <Model  
                        stakeholder={this.state.stakeholder} 
                        company={this.props.company} 
                        hideModel={this.hideModel} 
                        sureModel={this.sureModel}
                        /> :''
                }
                 <QueueAnim type={"left"} delay={300} className="queue-simple">
                     
                    <div key="a" className={style.box}>
                        <Message title="被保人信息"  type="true" />
                        <Ulbox 
                            agetext={this.state.stakeholder.bbrAget}
                            age={this.state.stakeholder.bbrAge} 
                            scope={this.props.bbrscop} 
                            selected={this.state.selectedBbr}  
                            onClickHandle={this.onClickHandleBbr} 
                            onChangePick={this.changeBbrAge}
                        />
                    </div>
                     <div key="b" className={style.box}>
                        <Message title="投保人信息" changeState={this.changeState} onOrOff={this.state.onOrOff} />
                            
                                {this.state.bbr?

                                     <Ulbox  key="a"
                                        agetext={this.state.stakeholder.tbrAget}
                                        age={this.state.stakeholder.tbrAge} 
                                        scope={this.props.tbrscop} 
                                        selected={this.state.selectedTbr}  
                                        onClickHandle={this.onClickHandleTbr} 
                                        onChangePick={this.changeTbrAge}
                                        /> :''
                                    }
                             
                        </div>
                    <div key="c" className={style.box}>
                        <Message title="投保选择"/>
                        <Plantitle 
                            insure="主"
                            title={this.props.company.product} 
                            stakeholder={this.state.stakeholder} 
                            handeladd={this.Mainhandeladd} 
                            handeledit={this.Mainhandeledit} 
                            handeldelete={this.Mainhandeldelete} 
                            insurance={this.state.stakeholder.insuranceInfo}
                            opshow={this.state.mainshow}
                            infoshow={this.state.stakeholder.infoshow}
                        />                    
                        {this.state.stakeholder.infoshow?
                                <Plan insurance={this.state.stakeholder.insuranceInfo}/>
                            :''
                        }
                         
                        
                    </div>
                    <div key="d" className={style.box}>
                        <Message title="收件人信息"  type="true"/>
                        <Ulbox name="true" selected={this.state.selectedR}  onClickHandle={this.onClickHandleR}   stakeholder={this.state.stakeholder} />
                    </div>    
                </QueueAnim>
            </div>
        );
    };
}