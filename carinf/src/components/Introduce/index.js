import React , {Component} from 'react'
import TitleBar from '../public/TitleBar';
import Item from './Items';
import Footer from './Footer';
import style from '../asset/css/introduce.less';
import { componies } from '../asset/json/appInfo.json';
 
import AppStore from '../../stores/AppStore';
import CarStore from '../../stores/CarStore';
import { Toast } from 'antd-mobile';
import { getCarThreeUrl } from '../APIUtils'


export default class Instruction extends Component {
    constructor(props){
        super(props);
        this.state = this.getData();
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        this._onChange=this._onChange.bind(this); 
        this.send=this.send.bind(this); 
    };
    getData() {
      return {
          company: localStorage.InsuranceCom,
          carUrl:CarStore.getCarUrl(),
          type: AppStore.getType(),  
      }
    };
    componentDidMount() { 
     getCarThreeUrl(); 
      CarStore.addChangeListener(this._onChange);  
      AppStore.addChangeListener(this._onChange);  
    };
    componentWillUnmount () {
      
      CarStore.removeChangeListener(this._onChange); 
      AppStore.removeChangeListener(this._onChange); 

    };
    _onChange() {  
        this.setState(this.getData());  
    } 
    onCommentSubmit(e){
      if(this.state.carUrl.result==0){
         Toast.info(this.state.carUrl.message, 2)

        e.preventDefault();
      }else{
       
      }
    };
    send(){
      if(this.state.carUrl.url){
         let company = componies[this.state.company-1];
        if(window.minsheng){
          
           window.minsheng.share(this.state.carUrl.url,"众安车险","7x24小时客服，专业理赔服务，保监会授权、合法权威、值得信赖，轻松投保、多终端服务、轻松快捷","/static/img/carInf/zhan.png")
            
        }else{
          tianbai.share(this.state.carUrl.url+"@众安车险@7x24小时客服，专业理赔服务，保监会授权、合法权威、值得信赖，轻松投保、多终端服务、轻松快捷@/static/img/carInf/zhan.png")  
        }
      }else{
        Toast.info('请登录后使用',1);
      }
       
       
    }
    tips(){
      Toast.info('请登录后使用',1);
    }
    render() {

        let company = componies[this.state.company-1];
        return (
           <div>
            <TitleBar title={company.product+"说明"}/>
            <img className={style.top_img} src={require(`../asset/img/banner_${company.spell}.jpg`)}/>
            <div className={style.words}><p>{company.title}</p></div>
            <Item company={company}/>
            <Footer />
            <div className={this.state.type?style.bottoms:style.bottom}>
              {this.state.type? <button className={style.orange} onClick={this.send}>发给客户</button>:'' }
             {this.state.carUrl.url?'':<button className={style.default} onClick={this.tips}>投保</button>}
              <form type="hidden" name='form' method="POST" className={style.sub_frame} action={this.state.carUrl.url}  onSubmit={this.onCommentSubmit}>
                  <input name="channel" type="hidden" value={this.state.carUrl.channel}/>
                  <input name="token" type="hidden" value={this.state.carUrl.token}/>
                  <input name="user_id" type="hidden" value={this.state.carUrl.user_id}/>
                     {this.state.carUrl.url?<button type="submit">投保</button>:''}
              
                  
              </form>
            </div>
          </div>
        );
    };
}