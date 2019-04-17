import Vue from 'vue'
const state = {
	orderList: [],
	params: {}
};
const getters = { 
	//页面获取数据
	getOrderList: function(state) {
		return state.orderList;
	}
};
const actions = {
	//异步数据请求
	fetchOrderList ( {commit, state} ) {
		console.log('fetchOrderList')
		Vue.$http.post('api/getOrderList', state.params)
		.then((res) => {
			// state.orderList = res.orderList;
			// state.total = res.total;
			commit('updateOrderList', res.orderList);
		}, (err) => {
		})
	}
	
};
const mutaions = { 
	//同步更新数据
	updateOrderList (state, orderList) {
		state.orderList= orderList
	}
};
export default {
	state,
	getters,
	actions,
	mutaions
}

