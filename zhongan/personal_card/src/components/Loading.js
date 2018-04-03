import React from 'react';
import style from './asset/css/index.less'

const Loading = ({isLoading}) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={style.loading}>
      <img src={ctx + '/static/img/public/loading.gif'} />
    </div>
  );
}

export default Loading