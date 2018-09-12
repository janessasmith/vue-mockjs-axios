import Mock from 'mockjs'

// 获取Mock.Random对象
let random = Mock.Random;
// Mock数组
let articleData = function(opt) {
    console.log('opt', opt);
    let articles = [];
    for (let i = 0; i < 30; i++) {
        let newArticle = {
            title: random.ctitle(5), // 随机生成5个中文字标题
            content: random.csentence(5, 50), // 随机生成中文5-50个字
            img: random.dataImage('200x120', 'mock图片'), // 随机生成200x120的Base64图片
            date: random.date() + ' ' + random.time() // 
        }
        articles.push(newArticle);
    }
    return {
        data: articles
    }
}

Mock.mock('/articles', /get|post/i, articleData); // 当get或post请求到/news路由时Mock会拦截请求并返回上面的数据