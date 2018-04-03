import zAJAX from 'z-ajax'

const _products = {result: 1, list: []}

//获取纸条列表
export const getPapers = (state, cb) => {
  let datas = {
    word: state.word,
    page: state.page
  }

  zAJAX('api/getPapers', datas, cb)
}

//登录接口
export const login = (state, cb) => {
  let datas = {
    username: state.username,
    password: state.password
  }

  zAJAX('api/login', datas, cb)
}

//检查登录是否有效
export const check = (state, cb) => {
  let datas = {
    username: state.username,
  }

  zAJAX('api/check', datas, cb)
}

//提交新纸条
export const submitPaper = (state, cb) => {
  let datas = {
    paperContent: state.paperContent,
  }

  zAJAX('api/submitPaper', datas, cb)
}