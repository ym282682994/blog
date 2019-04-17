<template>
  <div class="tjShare">
    <!-- main-right content begin -->
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-12">
          <div class="main-r-box">
            <h3>{{shareData.type}}</h3>
            <ul>
              <li v-for="item in shareData.data">
                <a href="###">
                  <span>{{item.username}}</span>：
                  <span>{{item.title}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- main-right content end -->
  </div>
</template>

<script>
export default {
  name: 'share-data',
  props: {
    'share-data': {
      type: Object,
      default: []
    }
  },
  data () {
    return {
      msg: 'tjShare'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
