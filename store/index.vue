<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	// 数据存储（状态）
	state: {
        orderList: [],
        params: {}
    },
    // 其它页面通过getters来读取state数据
    getters: {
	  getOrderList: function(state) {
		return state.orderList;
	}
	},
	// 异步数据请求 ajax
	actions: {
		//异步数据请求
		fetchOrderList ( {commit, state} ) {
			console.log('fetchOrderList')
			Vue.http.post('api/getOrderList', state.params)
			.then((res) => {
				console.log(res.data) 
				commit('updateOrderList', res.data.list);
			}, (err) => {
			})
		}
	},
	mutations: { 
	//同步更新数据
		updateOrderList (state, orderList) {
			return state.orderList= orderList
		},
		updateProductChange (state, o) {
			return state.params[o.key] = o.val
		}
	}
})

</script>