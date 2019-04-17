<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	// 数据存储（状态）
	state: {
        username: ''
    },
    // 其它页面通过getters来读取state数据
    getters: {
	  getUserName: function(state) {
		return state.username;
	}
	},
	// 异步数据请求 ajax
	actions: {
		//异步数据请求
		fetchUser ( {commit, state} ) {
			console.log('login')
			Vue.http.post('api/login', {})
			.then((res) => {
				console.log('------------') 
				console.log(res.data) 
				commit('getUser', res.data.username);
			}, (err) => {
			})
		}
	},
	mutations: { 
	//同步更新数据
		getUser (state, user) {
			return state.username= user
		}
	}
})

</script>