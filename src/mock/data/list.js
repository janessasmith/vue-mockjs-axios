import Mock from 'mockjs'; // 导入mockjs模块

let lists = [] // 定义需要的数据
const COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 定义需要的数量
for (let i = 0; i < COUNT.length; i++) {
  lists.push(Mock.mock({
    title: Mock.Random.ctitle(5), // 随机生成5个中文字标题
    content: Mock.Random.csentence(5, 50), // 随机生成中文5-50个字
    img: Mock.Random.dataImage('200x120', 'mock图片'), // 随机生成200x120的Base64图片
    date: Mock.Random.date() + ' ' + Mock.Random.time() // 随机生成日期和时间，中间用空格间隔
  }))
}

// 导出列表数据
export {
  lists
}
