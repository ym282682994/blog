<template>
  <div class="sharePage">
    <!-- main content start -->
    <div class="container main">
      <div class="row">
        <!-- main-left content start -->
        <div class="col-md-8">
          <div class="row fenxPath ">
            <div class="col-md-12">
              <p class="">
                当前位置： <a href="###">分享</a>
              </p>
            </div>
          </div>
        <!-- main-left article list begin -->
         <article-list :datas="datas.wzAraay"></article-list>
        <!-- main-left article list end -->
        </div>
        <!-- main-left content end -->
        
        <!-- main-right content end -->
        <tj-share :share-data="datas.shareData"></tj-share>
        <!-- main-right content end -->
      </div>
    </div>
    <!-- main content end -->
  </div>
</template>

<script>
import tjShare from '../base/tjShare.vue';
import articleList from '../base/articleList.vue';
export default {
  props: {
    'datas': {
      type: Object
    }
  },
  components: {
    tjShare,
    articleList
  },
  name: 'sharePage',
  data () {
    return {
      msg: 'sharePage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
