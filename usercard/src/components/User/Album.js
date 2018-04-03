import React, {Component} from 'react';
import style from '../asset/css/index.less'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Album extends Component {

	 constructor(props){
        super(props);
        this.state = {
		    data: ['AiyWuByWklrrUDlFignR'],
		    initialHeight: 176,
		 }
    };
     componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
 	render() {
 		   const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
          <div className={style.introduce}>
            <div className={style.title}>
              个人相册
            </div>
            <div className={style.album}>
             	<WingBlank>
              		<Carousel
				         className="my-carousel"
				         autoplay={false}
				         infinite
				         selectedIndex={1}
				         swipeSpeed={35}
				    >
	          			{this.state.data.map((ii,index) => (
		              		<img
				                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
				                alt=""
				                key={index}
				                onLoad={() => {
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({
				                    initialHeight: null,
				                  });
				                }}
		              		/>
	            
	          			))}
	        		</Carousel>
	        	</WingBlank>
          	</div>
         </div>
        );
    };

}