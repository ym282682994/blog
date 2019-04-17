<template>
  <div class="articlePAge">
    <!-- main content start -->
    <div class="container main">
      <div class="row">
        <!-- main-left content start -->
        <div class="col-md-8">
            <div class="row fenxPath ">
              <div class="col-md-12">
                <p class="">
                  当前位置： <span>文章详情页</span>
                </p>
              </div>
            </div>
            <div class="row main-l-box">
              <div class="col-md-12">
                <h5>
                  <span class="main-l-fs">{{article.title}}</span>
                </h5>
                <div class="state-info">
                  <span v-if="article.topNo">置顶</span>
                  <span>{{article.date}}</span>
                  <span>{{article.author}}</span>
                  <span>阅读数: {{article.clicks}}</span>
                </div>
                <div class="row">
                  <div class="col-md-12 col-sm-12 main-listBox">
                      <div class="main-box-content">
                        {{article.content}}
                      </div>
                      <div class="main-box-button">
                      </div>
                  </div>
                  <div class="col-md-12">
                      <span class="main-bq-span" v-for="item in article.label">{{item}}</span>
                  </div>
                </div>
              </div>
            </div>

        </div>
        <!-- main-left content end -->

        <!-- main-right content begin -->
        <share-list :share-data="datas.shareData"></share-list>
        <!-- main-right content end -->

      </div>
    </div>
  </div>
</template>

<script>
import shareList from '../base/tjShare.vue';
export default {
  name: 'articlePAge',
  props: {
    'datas' : { //获取从indexMain 传递过来的数据
      type: Object
    },
    'articleid': 0
  },
  created() { // 组件创建完成时
    // console.log('article page')
    // console.log(this.articleid)
    this.article = this.datas.wzAraay[this.articleid];
  },
  components: {
    shareList
  },
  data () {
    return {
      msg: 'articlePAge',
      article: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-l-box h5{
  border-bottom: 0;
}
.state-info {
  line-height: 24px;
  border-bottom: 1px solid #eee;
}
.state-info span {
  padding: 0 15px; 
}
</style>
