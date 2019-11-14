
export default {
  state: {
    selectList: '',
    selectshop: '',
    totalPrice: 0,
    deliveryFee: 0,
    orderName: '',
    orderSex: 0,
    orderPhone: 0,
    orderAddress_detail: 0,
    orderTag: ''
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
    }
  }
}
