<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" v-for="formLine in formData">
        <span class="g-form-label">{{ formLine.label }}：</span>
        <div class="g-form-input">
          <input type="text" :placeholder="formLine.title">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" >注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'isShow': 'boolean'
  },
  data () {
    return {
      formData: [
        {
          model: 'username',
          label: '用户名:',
          title: '请输入用户名',
          
        },
        {
          model: 'password',
          label: '密　码:',
          title: '请输入密码'
        },
        {
          model: 'passwords',
          label: '确认密码:',
          title: '请重复输入密码'
        }
      ]
    }
  },
  computed: {
    userErrors () {
      let status, errorText
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '必须包含@'
      }
      else {
        status = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let status, errorText
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '必须包含@'
      }
      else {
        status = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close', 'isShowRdgDialog')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
