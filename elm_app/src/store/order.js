
export default {
  state: {
		arr:[],
    selectList: '',
    selectshop: '',
    totalPrice: 0,
    deliveryFee: 0,
    orderName: '',
    orderSex: 0,
    orderPhone: 0,
    orderAddress_detail: 0,
    orderTag: '',
		num:30,
  },
	getters:{
		//输出数据
		shou_arr(state){
			return state.arr
		},
		shou_num(state){
			return state.num
		}
	},
  mutations: {
    setselectshop (state, value) {
      state.selectshop = value
    },
    setorderName (state, value) {
      state.orderName = value
    },
    setorderSex (state, value) {
      state.orderSex = value
    },
    setorderPhone (state, value) {
      state.orderPhone = value
    },
    setorderAddress_detail (state, value) {
      state.orderAddress_detail = value
    },
    setorderTag (state, value) {
      state.orderTag = value
    },
		one_arr(state,data){
			state.arr=data
		},
  },
	actions: {
			//一开始获取数据
			one_shou({commit},data){
				commit('one_arr',data)
			}
	},
}
