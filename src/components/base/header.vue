<template>
  <div class="head">
      <!-- top-login start -->
  <div class="top_login hidden-xs">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <span v-if="username === ''"><a href="javascript:;" @click="showlogDialog">用户登录</a></span>
            <span v-if="username !== ''"><a href="javascript:;">{{username}}</a></span>
            <span>|</span>
            <!-- <span v-if="username === ''"><a href="javascript:;" @click="showregDialog">注册</a></span> -->
            <span v-if="username === ''"><a href="javascript:;">注册</a></span>
            
            <span v-if="username !== ''"><a href="javascript:;" @click='quit'>退出</a></span>
        </div>
      </div>
    </div>
  </div>
  <!-- top-login end -->

  <!-- index-nav start -->
    <div class="container">
      <div class="row header-nav">
        <div class="col-md-4 col-sm-4 hidden-xs ">
            <router-link to="/"><h1>LOGO</h1></router-link>
        </div>
        <div class="col-md-6 col-sm-6 col-md-offset-2 col-sm-offset-2">
          <!-- 导航开始 -->
          <nav class="navbar navbar-default">
            <div class="navbar-header">
              <button @click='showCollapse' type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link to="/" tag="a" class="navbar-brand">博客导航</router-link>
            </div>
            <div  class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ref="collapse">
              <ul class="nav navbar-nav">
              </ul>
              <ul class="nav navbar-nav navbar">
                <li @click='showCollapse'><router-link to="/" tag="a" class="navbar-brand" >首页</router-link></li>
                <li><router-link to="/share" tag="a" class="navbar-brand">分享</router-link></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </nav>
        </div>
        </div>
    </div>
    <!-- index-nav end -->
    
    <!-- 登录 -->
<!--     <dialog-show :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="closeLog"></log-form>
    </dialog-show> -->

    <!-- 注册 -->
   <!--  <dialog-show :isShow="isShowRdgDialog" @on-close="closeDialog('isShowRdgDialog')">
      <log-form @has-log="closeLog"></log-form>
      <reg-form></reg-form>
    </dialog-show> -->
  </div>
</template>

<script>
// import dialogShow from './dailog.vue';
// import logForm from './logForm.vue';
// import regForm from './regForm.vue';
export default {
  props: { // 接收父组件传递数据
    username: {
      type: String,
      default: ''
    }
  },
  components: { // 注册组件
    // dialogShow: dialogShow,
    // logForm: logForm,
    // regForm: regForm
  },
  computed: { // 计算属性
  },
  mounted() {  // 创建完成时运行
  },
  name: 'HelloWorld',
  data () { // 数据
    return {
      user: '',
      isShowCollapse: true
    }
  },
  methods: {
    showlogDialog () {
      // this.isShowLogDialog = true=
      this.$emit('my-evet', 'showlogDialog')
    },
    showregDialog () {
      // this.isShowLogDialog = true
      this.$emit('reg-evet', 'showRegDialog')
    },
    quit() {
      // this.username = '';
      this.$store.commit('getUser', '')
      this.$emit('on-quit')
    },
    showCollapse () {
      // console.log(this.$refs.collapse.style.class)
      this.isShowCollapse = !this.isShowCollapse 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top_login {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}

.top_login {
  text-align: right;
  padding-right: 30px;
  height:27px;
  line-height: 27px;
  background: #fff;
  font-size: 10px;
  border-bottom: 1px solid #bbb;
}
.top_login span {
  padding: 0 5px;
}
.top_login span a {
  color: #666;
}
.top_login span a:hover {
  color: #333;
}

/*导航开始*/
.navbar-default {
  margin-bottom: 0;
}
.header-nav {
  padding: 20px 0;
}
/* 媒体查询 */
@media screen and (max-width : 768px) {
  .header-nav {
    padding: 0;

  }
  .header-nav .col-sm-6 {
    padding: 0;
    margin: 0;
  }
  
}

</style>
