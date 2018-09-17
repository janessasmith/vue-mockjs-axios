import axios from 'axios' // 通过axios-mock-adapter生成代理api地址
import mockAdapter from 'axios-mock-adapter'

import { lists } from './data/list' // 导入articleList数据

export default {
  init() { // 初始化函数
    let mock = new mockAdapter(axios); // 创建 mockAdapter 实例
    // 获取articleList列表
    mock.onGet('/list').reply(config => { // config指前台传过来的值
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            articleLists: lists // 返回状态为200，并且返回todos数据
          }])
        }, 200)
      })
    })
  }
}
