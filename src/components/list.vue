<template>
  <div class="article-wrapper">
    <h2 class="title">图文列表展示页</h2>
    <section class="article-list" v-for="(article, key) in articles" :key="key">
      <a class="article-img">
        <img :src="article.img">
      </a>
      <div class="article-word">
        <h5>{{ article.title }}</h5>
        <span class="time">{{ article.date }}</span>
        <p>{{ article.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "article-wrapper",
    data() {
      return {
        articles: []
      };
    },
    created() {
      this.articleAPI();
    },
    methods: {
      articleAPI: function () {
        this.$http.post("/articles", "type=web&key=123456").then(res => {
          console.log(res.data);
          this.articles = res.data.data;
        });
      }
    }
  };

</script>

<style scoped>
  .article-wrapper .title {
    padding: .1rem 0;
    font-size: .2rem;
    text-align: center;
  }

  .article-wrapper .article-list {
    margin: 0 auto;
    padding: .15rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }

  .article-wrapper .article-img {
    display: block;
    float: left;
    width: 200px;
    height: 120px;
  }

  .article-wrapper .article-img img {
    display: block;
  }

  .article-wrapper .article-word {
    margin-left: 220px;
  }

  .article-wrapper .article-word h5 {
    height: .3rem;
    line-height: .3rem;
    font-size: .13rem;
  }

  .article-wrapper .article-word p {
    line-height: .3rem;
    font-size: .11rem;
  }

  .article-wrapper .article-word .time {
    float: right;
    height: .2rem;
    line-height: .2rem;
    padding: .1rem;
    font-size: .1rem;
  }

</style>
