export default {
  state: {
    userId: '',
    userName: '',
    city: '',
    balance: 0,
    point: 0,
    addresses: '',
    gift_amount: 0
  },
  mutations: {
    setUserName (state, value) {
      state.userName = value
    },
    setUserId (state, value) {
      state.userId = value
    },
    setUsercity (state, value) {
      state.city = value
    },
    setBalance (state, value) {
      state.balance = value
    },
    setPoint (state, value) {
      state.point = value
    },
    setGift_amount (state, value) {
      state.gift_amount = value
    }
  }
}
