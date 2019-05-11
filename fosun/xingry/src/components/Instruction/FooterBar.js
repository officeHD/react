import React ,{Component}from 'react'
import style from './astyle.less'
import { Icon ,Modal,ActionSheet,Drawer,List} from 'antd-mobile';
import { Link} from 'react-router'
const operation = Modal.operation;
export default class Instruction extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  showActionSheet = () => {
    const BUTTONS = [`${ctx}/static/pdfjs/web/viewer.html?file=110045_tiaokuan.pdf&title=保险条款`,
    `${ctx}/static/pdfjs/web/viewer.html?file=120015_tiaokuan.pdf&title=保险条款`,
    `${ctx}/static/pdfjs/web/viewer.html?file=110045_job.pdf&title=健康职业分类表`];
    const ButtonT=["复星联合星如意重大疾病保险条款","附加投保人豁免保险费重大疾病保险条款","复星联合健康职业分类表"];
    ActionSheet.showActionSheetWithOptions({
      options: ButtonT,
     
      
      // title: 'title',
      message: '保险条款',
      maskClosable: true,
      'data-seed': 'logId',
    
    },
    (buttonIndex) => {
 
      if(BUTTONS[buttonIndex]){
        window.open(BUTTONS[buttonIndex])
      }
      
      
    });
  }

  render() {
   
    return (
      <div className={style.footer}>
        <ul>
          <li>
          
            <a target="_blank"  href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbts.pdf&title=投保提示书`}>
               <Icon type={require(`../asset/svg/xuzhi.svg`)}/><br/>
               投保提示书
            </a>
          </li>
          <li>
          <Link to="/insuAtten"><Icon type={require(`../asset/svg/smile.svg`)}/><br/>投保须知</Link>
            {/* <a target="_blank"  href={`${ctx}/static/pdfjs/web/viewer.html?file=110045_tbxz.pdf&title=投保须知`} >
              
              投保须知
            </a> */}
          </li>
          <li>
            <a onClick={this.showActionSheet} >
              <Icon type={require(`../asset/svg/tiaokuan.svg`)}/><br/>
              保险条款
            </a>
          </li>
        </ul>
        
      </div>     
    )}
 }   
  
 

 