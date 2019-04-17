<template>
  <div id="app">
    <my-head @on-quit="isQuit" @my-evet="showDialog" @reg-evet="showRegDialog" :username = 'username'></my-head>

    <!-- <index-main></index-main> -->
    
    <router-view 
    :datas = 'datas' 
    @get-art-index="getArtcle"
    :articleid='articleId'
    >
    </router-view>

    <my-foot></my-foot>

    <dialog-show :isShow="isShowlogDialog" @on-close="closeDialog('isShowlogDialog')">
      <log-form @has-log="hasLog"></log-form>
    </dialog-show>

    <dialog-show :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </dialog-show>

    <dialog-show :isShow="loginOk"
      @on-close="closeDialog('loginOk')"
    >
        用户登录成功
    </dialog-show>

      <dialog-show :isShow="onquit"
      @on-close="closeDialog('onquit')"
    >
      用户退出登录
    </dialog-show>
  </div>
</template>

<script>
import myHead from './base/header.vue';
import myFoot from './base/foot.vue';
import sharePage from './pages/sharePage.vue';
import dialogShow from './base/dailog.vue';
import logForm from './base/logForm.vue';
import regForm from './base/regForm.vue';
export default {
  name: 'Index',
  components: {
    myHead,
    myFoot,
    dialogShow,
    logForm,
    regForm
  },
  computed: {
     // 1.0获取state中的orderlist
     username() {
      // console.log(this.$store.getters.getUserName, 1)
      // 获取用户名
       return this.$store.getters.getUserName; 
     }
  },
  data() {
    return {
      msg: 'index',
      isShowlogDialog: false,
      isShowRegDialog: false,
      loginOk: false,
      onquit: false,
      // username: '',
      articleId: '', // indexMain 传递过来的文章Id
      datas: {
        'wzAraay': [
          {
            id: 0,
            src: require('../assets/images/a1.jpg'),
            author: "admin",
            date: '2019年1月10日 10:20:00',
            clicks: '99',
            title: '分享29个无版权免费的高清图片视频素材网站',
            topNo: 'true',
            href: '/article',
            more: '#/share',
            desc: '图片胜于文字，而视频更胜于图片，相比文字和图片，视频这种多媒体形式在有效吸引用户视线、增强用户理解等方面的能力是毋庸置疑的，我们也从读图时代过渡到了现在的视频时代，各种短视频应用以及在线直播蜂拥而至，在我们日常的工作学习中也不免会用到一些视频素材。本文给大家介绍一些不错的无版权图片素材视频网站(部分需科学上网)，用好了，视频制作的成本将大大降低。',
            content: '图片胜于文字，而视频更胜于图片，相比文字和图片，视频这种多媒体形式在有效吸引用户视线、增强用户理解等方面的能力是毋庸置疑的，我们也从读图时代过渡到了现在的视频时代，各种短视频应用以及在线直播蜂拥而至，在我们日常的工作学习中也不免会用到一些视频素材。本文给大家介绍一些不错的无版权图片素材视频网站(部分需科学上网)，用好了，视频制作的成本将大大降低。',
            label: ['html', 'jQuery']
          },
          {
            id: 1,
            src: require('../assets/images/xuehua.jpg'),
            author: "admin",
            date: '2019年1月12日 12:20:00',
            clicks: '99',
            title: '用js代码和插件实现wordpress雪花飘落效果',
            topNo: 'true',
            more: '#/share',
            href: '/article',
            desc: '冬天到了，很多的博客空间都加了雪花的效果，于是去看了看他们的效果实现。有好几个效果代码，就拿过来了，有需要的朋友可以拿过去试试看。',
            content: '在网上看到一个非常强大的SnowStorm插件。和牛逼啊，好像是google上搜let it snow会有下雪以及霜冻效果的代码，很有创意。觉得好的童鞋可以自己去官网看看。网上找了一个简单的随机的雪花飘落效果代码分享给大家（这个效果是纯代码写的。雪花就是*',
            label: ['html', 'jQuery', 'javaScript']
          },
          {
            id: 2,
            src: require('../assets/images/timthumb.jpg'),
            author: "admin",
            date: '2019年1月12日 12:20:00',
            clicks: '99',
            title: '用JS判断浏览器类型的代码',
            topNo: 'false',
            more: '#/share',
            href: '/article',
            desc: '一般的浏览器类型都可以通过js来判断出来，当然，少数例外（例如：360浏览器，它会隐藏自己的外壳，原因我就不解释，明白人都懂的）。今天给大家分享的是一个通过原生js写的判断浏览器类型的小例子。',
            content: '一般的浏览器类型都可以通过js来判断出来，当然，少数例外（例如：360浏览器，它会隐藏自己的外壳，原因我就不解释，明白人都懂的）。今天给大家分享的是一个通过原生js写的判断浏览器类型的小例子。原理大致如下：每一个浏览器的UA不同，例如火狐浏览器的UA是Firefox，IE浏览器的UA是MSIE，Chrome浏览器的UA是Chrome，搜狗浏览器的UA是SE，遨游浏览器的UA是Maxthon，然后通过UA就可以判断出来。代码也很容易看懂，大家请看：你现在的类型是(可以换个浏览器打开这个页面试试效果)：chrome浏览器',
            label: ['html', 'jQuery', 'javaScript']
          }
        ],
        'shareData': {
          type: '推荐文章',
          data: [
            {
              title: '人应当如何迁善改过？',
              username: '王路'
            },
            {
              title: 'JQ分享几个比较好用的代码',
              username: '赵钱'
            },
            {
              title: '内存泄露，应该如何避免',
              username: '李天'
            },
            {
              title: 'javascritp数组方法介绍',
              username: '五小娃'
            }
          ]
        },
        'slides': [
          {
            src: require('../assets/slideShow/1.jpg'),
            title: 'xxx1',
            href: '###'
          },
          {
            src: require('../assets/slideShow/2.jpg'),
            title: 'xxx2',
            href: '###'
          },
          {
            src: require('../assets/slideShow/3.jpg'),
            title: 'xxx3',
            href: '###'
          },
          {
            src: require('../assets/slideShow/4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ]

      }
    }
  },
  methods: {
    myFunctionData() {
      console.log('index methods function')
    },
    showDialog (tag) {
      console.log(tag)
      this.isShowlogDialog = true
    },
    showRegDialog (tag) {
      console.log(tag)
      this.isShowRegDialog = true
    },
    closeDialog(tag) {
      this[tag] = false
    },
    hasLog( data ) {
      console.log(data)
      // this.username = data.username;
      this.closeDialog('isShowlogDialog')
      this.loginOk = true;
    },
    myEventFun() {
      console.log('foot to emit-evnet')
    },

    showData(){
      console.log(this.datas)
    },
    getArtcle(id) { // 获取indexMain 文章id, 发送给 article
      this.articleId = id;
    },
    isQuit() {
      // 退出登录
      console.log('退出')
      this.onquit = true;
    }
  },
  mounted() {
    this.showData();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* main start */
/* main left */
/* banner */
.main-banner {
  height: 320px;
  background: #999;
}
.main-gongg {
  padding: 0;
  height: 38px;
  line-height: 38px;
  border: 1px solid #ddd;
  background: #DFF0D8;
  border-radius: 4px;
  color : #666;
  position: relative;
}
.main-gongg span {
  line-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  cursor: pointer;
}
.main-l-box {
  background: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.main-l-box h5 {
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #eee;
}
.main-l-box h5 a {
  color: #00a67c;
  font-weight: 600;
  font-size: 14px;
}
.main-l-box h5 a:hover {
  color: #000;
}
.main-l-box img {
  transition: all .3s ease;
}
.main-l-box img:hover {
  transform: scale(1.05);
}
.main-listBox {
  /*height: 166px;*/
  padding-bottom: 20px;
  position: relative;
}
.toggle-checkbox:active div{
  display: block !important
 }
.main-box-content {
  padding: 15px;
  font-size: 13px;
  color: #666;
  /*height: 115px;*/
  /*overflow: hidden;*/
}
.main-box-button button {
  border: 0;
  background: #777;
  border-radius: 4px;
  color: #fff;
  padding: 5px 10px;
  position: absolute;
  bottom: 0;
  right: 15px;
  transition: all .3s ease;
}
.main-box-button button:hover {
  background: #333;
  color: #fff;
}
.main-bq-span {
  background: #efefef;
  padding: 3px 5px;
  color: #666;
  font-size: 12px;
  margin-right: 10px;
}
.main-l-fs {
  color: #199E46;
}
/* main right */
.main-r-box {
  border: 1px solid #ddd;
  background: #fff;
}
.main-r-box h3 {
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ddd;
  background: #F8F8F8;
  color: #666;
  padding-left: 15px;
  font-size: 14px;
  font-weight: 900;
}
.main-r-box ul {
  padding: 10px;
}
.main-r-box li {
  line-height: 27px;

}
.main-r-box li a {
  color: #666;
}
.main-r-user {
  text-align: center;
}
.main-r-user h3 {
  text-align: left;
}
.main-r-user li {
  width: 20%;
  display: inline-block;
  margin-right: 8px;
}
.main-r-user li img {
  max-width: 100%;
  display: block;
}
.main-r-user li p {
  text-align: center;
  line-height: 27px;
}
/* main end */

/* footer start */
.footer {
  background: #232323;
  padding: 20px 0;
}
.footer-info {
  font-size: 12px;
  background: #171717;
  padding: 10px 0;
  color: #fefefe;
  text-align: center;
}
/* footer end  */
.fenxPath {
  font-size: 12px;
  padding: 0;
  height: 38px;
  line-height: 38px;
  border: 1px solid #ddd;
  background: #fefefe;
  border-radius: 4px;
  color : #666;
  position: relative;
}
.main-box-button a {
  color: #fff;
}
/* fenx start */

@media screen and (max-width : 768px) {
}
@media screen and (max-width : 414px ) {
  body {
    min-width: 320px;
  }
  .main-l-box h5 {
    width: 280px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
   .col-sm-8.main-listBox {
      height: 100%;
      position: relative;
      /*padding-bottom: 20px;*/
  }
  .main-box-content {
    height: 100%;
  }
}
</style>
