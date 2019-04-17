<template>
  <div class="articLeList">
    <div class="row main-l-box" v-for="(item,index) in datas">
      <div class="col-md-12">
        <h5>
          <router-link :to="item.href">
            <span class="main-l-fs">【分享】</span>
            <span @click="postData(index)">{{item.title}}</span>
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
  </div>
</template>

<script>
export default {
  props: {
    'datas' : {
      type: Array
    }
  },
  name: 'articLeList',
  data () {
    return {
      msg: 'Welcome to articLeList'
    }
  },
  methods: {
    postData(index) {
      console.log(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
