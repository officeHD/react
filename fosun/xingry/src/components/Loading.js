import React from 'react';
import style from './asset/css/index.less'

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className={style.loading}>
      <div className={style.load_img}>
        <img src={ctx + '/static/img/wechat/logo.png'} />
      </div>
    </div>
  );
}

export default Loading