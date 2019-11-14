import Vue from 'vue'
import Router from 'vue-router'

import login from './views/login.vue' /* 登录 lz */
import change from './views/changepassword.vue' /* 重置密码 lz */
import info from './views/info.vue' /* 用户信息 lz */
import setusername from './views/setusername.vue'
import add from './views/add.vue'
import addsss from './views/addsss.vue'
import addss from './views/addss.vue'
import adds from './views/adds.vue'
import shop from './views/shop.vue'  //商铺列表
import shopDetail from './views/shopDetail.vue' //商铺详情
import shopSafe from './views/shopSafe.vue'

import Index from './views/Index.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Takeaway from './components/Takeaway'
import search from './components/search'
import Order from './components/Order'
import user from './components/user'

// 服务中心
import foodDetail from './views/foodDetail.vue'
import Users from './views/user.vue'
import serviceD from './views/service_details.vue'
import service1 from './views/service1.vue'
import sweetmeats from './views/sweetmeats.vue'

import searchtodetail from './components/searchToDetail.vue' /* 搜索的时候，点击li，进入详情页 */
import searchaa from './views/searchaa.vue'

import confirmOrder from './views/confirmOrder.vue'// 确认订单
import chooseaddress from './views/chooseAddress.vue'// 选择地址
import addaddress from './views/addAddress.vue' //添加地址
import searchaddress from './views/searchAddress.vue' //搜索地址
import kouwei from './views/kouwei.vue'//订单备注
import invoice from './views/invoice.vue' //订单的发票
import orderDetail from './views/orderDetail.vue'
// -----------------------  李军
// 优惠
import benefits from './views/benefits.vue'
import historied from './views/historyred.vue'
import Retails from './views/reddetails.vue'
import Coupon from './views/coupon.vue'
import exchange from './views/exchange.vue'
import commend from './views/commend.vue'
// 金额
import Balance1 from './views/balance1.vue'// 金额数量
import Explain from './views/explain.vue'// 金额说明

// 积分
import score from './views/score.vue'
import score1 from './views/score1.vue'
import scoreinfo from './views/score_info.vue'
// 积分商城
// eslint-disable-next-line camelcase
import jf_Shopping from './views/jf_shopping.vue'
Vue.use(Router)

// 应用下载
import App from './views/appdetails.vue'

// Vip
// eslint-disable-next-line import/first
import vip1 from './views/vip1.vue'
// eslint-disable-next-line import/first
import vipDescription from './views/vipDescription.vue'
// eslint-disable-next-line import/first
import payment from './views/payment.vue'
// eslint-disable-next-line import/first
import useCart from './views/useCart.vue'
// eslint-disable-next-line import/first
import invoiceRecord from './views/invoiceRecord'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //商铺列表
    {
      path:'/shop',
      component:shop,
    },
    //商家详情
    {
      path:'/shopDetail',
      name:'shopDetail',
      component:shopDetail,
      children:[
        {
          path:'shopSafe',
          name:'shopSafe',
          component:shopSafe
        }
      ]
    },
    // 积分
    {
      path: '/integral',
      name: 'integral',
      component: score
    },
    {
      path: '/integral1',
      name: 'integral1',
      component: score1,
      children: [{
        path: 'scoreinfo',
        name: 'scoreinfo',
        component: scoreinfo
      }]
    },
    // 积分商城
    {
      path: '/shopping',
      name: 'shopping',
      component: jf_Shopping
    },
    // 优惠
    {
      path: '/benefit',
      name: 'benefit',
      component: benefits,
      children: [
        {
          path: 'commend',
          name: 'commend',
          component: commend
        },
        {
          path: 'exchange',
          name: 'exchange',
          component: exchange
        },
        {
          path: '/hbDescription',
          name: 'red',
          component: Retails
        },
        {
          path: 'historied',
          name: 'historied',
          component: historied
        },
        {
          path: '/coupon',
          name: 'coupon',
          component: Coupon
        }
      ]
    },
    {
      // 商品详情
      path: '/foodDetail',
      name: 'foodDetail',
      component: foodDetail
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 重置密码
    {
      path: '/change',
      name: 'change',
      component: change
    },
    // 首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // 城市列表
    {
      path: '/city/:id',
      name: 'city',
      component: City
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        // 外卖
        {
          path: 'Takeaway',
          props: route => ({
            name: route.query.geohash
          }),
          name: 'Takeaway',
          component: Takeaway
        },
        {
          path: 'sweetmeats',
          name: 'sweetmeats',
          component: sweetmeats
        },
        // 搜索
        {
          path: 'search',
          name: 'search',
          component: searchaa,
          children: [
            {
              path: '/',
              name: 'search',
              component: search,
              props: route => ({
                name: route.query
              })
            },
            // 点击每一个li，进入食物详情
            {
              path: 'searchdetail',
              name: 'searchdetail',
              component: searchtodetail
            }
          ]
        },
        // 订单
        {
          path: 'Order',
          name: 'Order',
          component: Order
        },
        {
            path: 'orderDetail',
            name: 'orderDetail',
            component: orderDetail,
        },
        // 确认订单
        {
          path: 'confirmOrder',
          name: 'confirmOrder',
          component: confirmOrder,
          children: [
            // 选择地址
            {
              path: 'chooseaddress',
              name: 'chooseaddress',
              component: chooseaddress,
              children: [
                // 新增收货地址
                {
                  path: 'addaddress',
                  name: 'addaddress',
                  component: addaddress,
                  children: [
                    // 搜索地址
                    {
                      path: 'searchaddress',
                      name: 'searchaddress',
                      component: searchaddress
                    }
                  ]
                }
              ]
            },
            // 订单备注（口味）
            {
              path: 'kouwei',
              name: 'kouwei',
              component: kouwei
            },
            // invoice发票
            {
              path: 'invoice',
              name: 'invoice',
              component: invoice
            }
          ]
        },
        // 我的
        {
          path: 'user',
          name: 'user',
          component: user,
          children: [
            {
              path: '/',
              name: 'users',
              component: Users
            },
            // 账户信息
            {
              path: 'info',
              name:'info',
              component: info,
            },
            {
              path: 'setusername',
              name: 'setusername',
              component: setusername
            },
            {
              path:'add',
              name:'add',
              component:add
            },
            {
              path: 'adds',
              name: 'adds',
              component: adds,
              children: [
                {
                  path:'/',
                  name:'adds',
                  component:addsss
                },
                {
                  path: 'addss',
                  component: addss
                }
              ]
            }
          ]
        }
      ]
    },
    // 我的余额
    {
      path: '/explain',
      name: 'explain',
      component: Balance1,
      children:[
        {
          // 余额说明
          path: '/explain1',
          name: 'explain1',
          component: Explain
        }
      ]
    },
    // 服务中心
    {
      path: '/service',
      name: 'service',
      component: service1,
      children: [
        // 热门问题
        {
          path: 'Details',
          name: 'details',
          component: serviceD
        }
      ]
    },
    // 饿了么会员卡
    {
      path: '/vip',
      name: 'vip',
      component: vip1,
      children: [
        {
          path: 'vipDescription',
          name: 'vipDescription',
          component: vipDescription
        },
        {
          path: 'payment',
          name: 'payment',
          component: payment
        },
        {
          path: 'useCart',
          name: 'useCart',
          component: useCart
        },
        {
          path: 'invoiceRecord',
          name: 'invoiceRecord',
          component: invoiceRecord
        }
      ]
    },
    // 应用下载
    {
      path: '/app',
      name: 'app',
      component: App
    }
  ]
})
