<template>
  <div class="inde-main">
    <!-- main content start -->
    <div class="container main">
      <div class="row">
        <!-- main-left content start -->
        <div class="col-md-8">
            <div class="row main-banner hidden-xs">
              <div class="col-md-12">
                  <slide-show class="" :slides="datas.slides" :inv="invTime"></slide-show> 
              </div>
            </div>
            <div class="row main-gongg" v-if="isGongg">
              <div class="col-md-12">
                <p class="">
                  公告栏
                  <span @click="closeGongg">x</span>
                </p>
              </div>
            </div>
      
        <!-- main-right artList begin -->
        <div class="row main-l-box" v-for="(item,index) in datas.wzAraay">
          <div class="col-md-12">
            <h5>
              <router-link :to="item.href">
                <span class="main-l-fs">【分享】</span>
                <span @click="sendId(item.id)">{{item.title}}</span>
              </router-link>
            </h5>
            <div class="row">
              <div class="col-md-4 col-sm-4 hidden-xs">
                  <img :src="item.src" alt="" />
              </div>
              <div class="col-md-8 col-sm-8 main-listBox">
                  <div class="main-box-content">
                    <span>{{item.content}}</span>
                  </div>
                  <div class="main-box-button">
                    <button type="button" name="button">
                      <a :href="item.more">查看更多</a>
                    </button>
                  </div>
              </div>
              <div class="col-md-12">
                  <span class="glyphicon glyphicon-tag"></span>
                  <span class="main-bq-span" v-for="(list,index) in item.label">{{ list }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- main-right artList end -->

        </div>
        <!-- main-left content end -->

        <!-- main-right content begin -->
        <share-list :share-data="datas.shareData"></share-list>
        <!-- main-right content end -->
        
      </div>

    </div>
    <!-- main content end -->
  </div>
</template>

<script>
import slideShow from '../slide.vue';
import shareList from '../base/tjShare.vue';
import artList from '../base/articleList.vue';
export default {
  props: {
    'datas' : {
      type: Object
    }
  },
  components: {
    slideShow: slideShow,
    shareList,
    artList
  },
  name: 'HelloWorld',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App',
      invTime: 2000,
      isGongg: true
    }
  },
  methods: {
    articleContent (data) {
      console.log('articleContent')
      console.log(data)
      this.$emit('send-article-data', data)
    },
    sendId (id) {
      this.$emit('get-art-index', id);
    },
    closeGongg(v){
      this.isGongg = false;
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-banner .col-md-12 {
  padding: 0
}
</style>
