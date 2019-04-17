<template>
  <div class="foot">
    <div class="container">
	  <div class="row footer-info">
	    <div class="col-md-12">
	      ©2019 <span @click="myEvent">个人博客</span> '&' 版权所有
	    </div>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  props: {
    'myFunction' : {
      type: Function
    }
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    myEvent() {
      this.$emit('my-event');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
