<template>
  <div class="list">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <div class="shop_container">
      <div class="head"
           v-show="!type">
        <div>
          <!--头部-->
          <router-link :to="{path:'/about/Takeaway',query:{geohash: addrs.split(',')[0]+','+ addrs.split(',')[1]}}"
                       class="back_Takeaway">&lt;</router-link>
          <div class="head_tit">
            <div class="tit_img">
              <img :src="'https://elm.cangdu.org/img/'+img_path"
                   alt="">
            </div>
            <div class="tit_info">
              <h3 class="text"
                  style="color: #fff">{{list.name}}</h3>
              <p>商家配送／分钟送达／配送费¥5</p>
              <p>公告：{{list.promotion_info}}</p>
            </div>
          </div>
        </div>
        <span style="width: 100%;"
              v-if="arr.length">
          <span class="name">{{arr[0].icon_name}}
          </span>{{arr[0].description}}<span style="margin-left: .1rem;">(APP专享)
          </span><span @click="type=true"
                style="float: right;font-size: .24rem">{{arr.length}}个活动&gt;</span></span>
        <router-link :to="{name:'shopDetail',params:{detail:list}}"
                     class="shopDetail">&gt;</router-link>
      </div>
      <div class="bg min"
           :class="{max:arr.length}"
           v-show="!type">
        <img :src="'https://elm.cangdu.org/img/'+img_path"
             alt="">
      </div>
      <!--        活动-->
      <div class="doing"
           v-show="type">
        <h3>{{list.name}}</h3>
        <div>
          <h3>优惠信息</h3>
          <p v-for="(i,index) in arr"
             :key="index">
            <span class="name">{{i.icon_name}}</span>
            <span>{{i.description}}</span>
            <span style="margin-left: .1rem;">(APP专享)</span>
          </p>
        </div>
        <div>
          <h3>商家公告</h3>
          <p>{{list.promotion_info}}</p>
        </div>
        <p @click="type=false">&#10006;</p>
      </div>
      <div class="change_show"
           v-show="!type">
        <div><span @click="num=0"
                :class="{activity_show:num==0}">商品</span></div>
        <div><span @click="num=1"
                :class="{activity_show:num==1}">评价</span></div>
      </div>
      <!--    商品    -->
      <div class="food_container"
           v-show="num==0"
           v-if="!type">
        <!--          左导航-->
        <ul class="menu_left">
          <li v-for="(i,index) in show_list"
              :class="{bor_active:num1==index}"
              style="padding-left: .1rem;position: relative"
              @click="num1=index"
              :key="index">
            <a :href="'#'+index">{{i.name}}</a>
            <span v-show="i.num"
                  class="l_num">{{i.num}}</span>
          </li>
        </ul>
        <!-- 展示商品 -->
        <ul class="menu_right">
          <li v-for="(i,index) in show_list"
              :id="index"
              :key="index">
            <p class="tit"
               style="position: relative">
              <span class="rexiao">{{i.name}}</span>
              <i style="margin-left: .2rem;">{{i.description}}</i>
              <i @click="titType=!titType"
                 style="margin-left: .9rem;font-size: .3rem;display: inline-block">···</i>
              <span v-show="titType"
                    class="tit_name">
                <span class="rexiao">{{i.name}}</span>
                <i style="margin-left: .2rem;">{{i.description}}</i>
              </span>
            </p>
            <div v-for="(j,idx) in i.foods"
                 class="menu_detail_list"
                 :key="idx">
              <div class="menu_detail_link">
                <p class="menu_food_img">
                  <img :src="'https://elm.cangdu.org/img/'+j.image_path"
                       alt=""
                       style="width: 1rem;height: 1rem;">
                </p>
                <div class="menu_food_description">
                  <h4>{{j.name}}</h4>
                  <p style="color: #999;margin-bottom:.1rem ; ">{{j.description}}</p>
                  <p style="margin-bottom: .1rem"><span>{{j.tips.split(' ')[1]}}</span><span style="margin-left: .1rem">好评率{{j.satisfy_rate}}%</span></p>
                  <p v-if="obj[idx]"><span class="border">{{obj[idx].image_text}}</span></p>
                </div>
              </div>
              <div v-if="obj1[idx]"
                   style="height: 0;">
                <div v-for="(k,index) in obj1[idx]"
                     :key="index">
                  <p style="height: .1rem;"
                     v-for="(l,index) in k"
                     :key="index">
                    <span :class="{left_top:l=='新'}"><span class="asle">{{l=='新'?'新品':''}}</span></span>
                    <span :class="{zhpai:l=='招牌'}">{{l=='招牌'?'招牌':''}}</span>
                  </p>
                </div>
              </div>
              <!--                价格-->
              <div class="menu_detail_footer">
                <p class="food_price"><span>￥</span><span style="font-size: .35rem">{{j.specfoods[0].price}}</span><span style="padding-left: .1rem;color: #666;">{{j.specfoods.length>1?'起':''}}</span></p>
                <shopbtn v-if="!j.specfoods[1]">
                  <template v-slot:jia>
                    <div @click="jia(j,i)">+</div>
                  </template>
                  <template v-slot:num
                            v-if="j.num">{{j.num}}</template>
                  <template v-slot:jian
                            v-if="j.num">
                    <div :class="{btn_jn:j.num>0}"
                         @click="jian(j,i)">-</div>
                  </template>
                </shopbtn>
                <div class="r_btn"
                     v-if="j.specfoods[1]"
                     @click="btn(j,i)">选规格</div>
              </div>
            </div>
          </li>
        </ul>
        <!--   选规格     -->
        <div class="normbox" v-show="normtype">
          <div class="norm">
            <h3><span class="n_name">{{norm_data.name}}</span><span @click="back" class="n_back">×</span></h3>
            <p class="n_ti">规格</p>
            <div style="overflow:hidden;padding-left:0.18rem">
              <div v-for="(i,idnex) in norm_data.specfoods"
                :key="idnex" class="n_li">
                <span @click="index(idnex)" :class="{specs_active:num2==idnex}">{{i.specs_name}}</span>
              </div>
            </div>
            <p v-if="norm_data" class="n_pr">
              <span>{{num2==0?norm_data.specfoods[0].price:norm_data.specfoods[1].price}}</span>
              <span @click="shca(norm_data.specfoods[num2])">加入购物车</span>
            </p>
          </div>
        </div>
      </div>
      <!--        评价-->
      <div v-show="num==1" style="overflow-y: scroll;height:8.5rem;" id="pingbox">
        <div class="b_pingjia">
          <div class="b_pingjia_l">
            <p class="b_pingjia_l_p1">{{parseFloat(foodscore.food_score).toFixed(2)}}</p>
            <p class="b_pingjia_l_p2">综合评价</p>
            <p class="b_pingjia_l_p3">高于周边商家76.9%</p>
          </div>
          <div class="b_pingjia_r">
            <p class="b_pingjia_r_p1">
              <span>服务态度</span>
              <el-rate style="display:inline-block;"
                       v-model="fen"
                       disabled
                       show-score
                       text-color="#ff9a0d"
                       score-template="{value}">
              </el-rate>
            </p>
            <p class="b_pingjia_r_p2">
              <span>菜品评价</span>
              <el-rate style="display:inline-block;"
                       v-model="fen1"
                       disabled
                       show-score
                       text-color="#ff9a0d"
                       score-template="{value}">
              </el-rate>
            </p>
            <p class="b_pingjia_r_p3">
              <span>送达时间</span>&nbsp;
              <span>{{foodscore.deliver_time}}</span><span class="fenzhong">分钟</span>
            </p>
          </div>
        </div>
        <div class="b_all">
          <p class="b_all_list"
             v-for="(item,index) in commenttype"
             :key="index"
             @click="tagidx=index">
            <span :style='{"background":tagidx==index?"#3190e8":"","color":tagidx==index?"#fff":""}'>{{item.name}}({{item.count}})</span>
          </p>
        </div>
        <div class="user_list">
          <div class="user_list_in"
               v-for="(item,index) in allcomment"
               :key="index">
            <div class="user_list_in_l">
              <img
                  v-show="item.avatar.length>0"
                  :src="'https://fuss10.elemecdn.com/'+ item.avatar.charAt(0)+'/'+item.avatar.charAt(1)+item.avatar.charAt(2)+'/'+item.avatar.substring(3)+'.jpeg'" style="width:0.6rem;height:0.6rem;border-radius: 50%;"
                />
              <img v-show="item.avatar.length<=0" src="//elm.cangdu.org/img/default.jpg" style="width:0.6rem;height:0.6rem;border-radius: 50%;"/>
            </div>
            <div class="user_list_in_r">
              <p style="overflow:hidden;">
                <i style="float:left;font-style:normal;font-size:0.24rem;">{{item.username}}</i>
                <span style="float:right;">{{item.rated_at}}</span>
              </p>
              <p style="font-size:0.2rem">
                <el-rate style="display:inline-block;"
                         v-model="item.rating_star"
                         disabled
                         show-score
                         text-color="#ff9900">
                </el-rate>
                {{item.time_spent_desc}}
              </p>
              <div style="width:100%;overflow:hidden">
                <div style="float:left" v-for="(j,index) in item.item_ratings" :key="index">
                  <img v-if="j.image_hash!=''" :src="'https://fuss10.elemecdn.com/'+ j.image_hash.charAt(0)+'/'+j.image_hash.charAt(1)+j.image_hash.charAt(2)+'/'+j.image_hash.substring(3)+'.jpeg'" style="width:1rem;height:1rem;margin-right:0.2rem;"/>
                </div>
              </div>
              <p style="overflow:hidden;">
                <span v-for="(items,index) in dots"
                      :key="index"
                      class="dotteds">{{items.food_name}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <shopcart v-show="num==0"
                v-if="!type"
                class="shop_cart"
                :class="{shop_none:!g_num}">
        <template v-slot:iconfont>
          <i class="iconfont" type="button" data-toggle="modal" data-target="#myModal">&#xe604;</i>
        </template>
        <template v-slot:num
                  v-if="g_num">
          <div :class="{num_bg:price>0}"><span :class="{num:g_num}">{{hhh}}</span></div>
        </template>
        <template v-slot:price>￥{{price}}.00</template>
        <template v-slot:pick_up>
          <div :class="{pick_bg:g_num>0}">
            <router-link to='/about/confirmOrder'>
              <span class="pick_up">{{price?'去结算':'还差￥20起送'}}</span>
            </router-link>
          </div>
        </template>
      </shopcart>
      <!-- 我的购物车 -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">清空</span></button>
              <h4 class="modal-title" id="myModalLabel">购物车</h4>
            </div>
            <div class="modal-body">
              <div v-for="(i,index) in shopCart_each" class="modal_box" :key="index">
                <div class="modal_showbox">
                  <span style="font-size: .3rem">{{i.name}}</span><br>
                  <span v-if="i.specs_name" style="font-size: .2rem">{{i.specs_name}}</span>
                </div>
                  <shopbtn style="float: right;padding: 0;margin-right: .1rem;margin-top: .2rem;">
                    <template v-slot:jia><span @click="g_jia(i,index)">+</span></template>
                    <template v-slot:num>{{shopCart_each[index].num}}</template>
                    <template v-slot:jian><span class="btn_jn" @click="g_jian(i,index)">-</span></template>
                  </shopbtn>
                <div  class="modal_showbox" style="float: right;margin-right: .5rem;color: #f60">￥{{i.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .modal-body .modal_showbox{
    display: inline-block;
    line-height: .3rem;
    padding: .2rem .1rem;
    font-size: .3rem
  }
  .normbox .specs_active{
    border-color: #3199e8;
    color: #3199e8;
  }
.modal-title{
  font-size: 0.3rem;
  padding:0 0.14rem !important;
}
.modal-header .close{
    margin-top: 2px;
    font-size: 0.3rem;
    margin-right: 0.14rem
}
.modal-header .close span{
    font-size: 0.3rem;
}
</style>
<style scoped>

.tag_list_ul li{
    font-size: .25rem;
    color: #6d7885;
    padding: .02rem .1rem;
    background-color: #ebf5ff;
    border-radius: .1rem;
    border: 1px;
    line-height: .7rem;
    margin: 0 .2rem .1rem 0;
}
.tag_list_ul .tagActivity{
    background-color: #3190e8;
    color: #fff;
}
.tag_list_ul{
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: .2rem;
}
.delivery_time{
    font-size: .2rem;
    color: #999;
}
.rating_num{
    width: 1.5rem;
    font-size: .2rem;
    color: #f60;
}
.rating_container{
    flex: 1;
    overflow-y: hidden;
    flex-direction: column;
}
.rating_header_right p span:first-of-type {
    color: #666;
    margin-right: .2rem;
}
.rating_header_right p span{
  font-size: .2rem
}
.rating_header_right p{
    font-size: .3rem;
    line-height: .5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.rating_header_right {
    flex: 4;
}
.rating_header_left p:nth-of-type(3) {
    font-size: .2rem;
    color: #999;
}
.rating_header_left p:nth-of-type(2){
      font-size: .3rem;
    color: #666;
    margin-bottom: .1rem;
}
.rating_header_left p:first-of-type {
    font-size: .6rem;
    color: #f60;
}
.rating_header {
    display: flex;
    background-color: #fff;
    padding: .1rem .11rem;
    margin-bottom: .11rem;
}
.rating_header_left {
    flex: 3;
    text-align: center;
}
</style>
<script>
import shopbtn from '../components/shopbtn'
import shopcart from '../views/shopcart'
import Loading from '../components/loading'
export default {
  name: 's_shop',
  components: {
    shopbtn,
    shopcart,
    Loading
  },
  data () {
    return {
      tagidx:0,
      num1: 0,
      id: '',
      img_path: '',
      list: '',
      addrs: '',
      arr: [],
      type: false,
      titType: false,
      num: 0,
      show_list: '',
      obj: [],
      obj1: [],
      price: 0,
      shop_num: 0,
      prenx: false,
      g_num: 0,
      norm_data: '',
      norm_data_food: '',
      normtype: false,
      num2: 0,
      isLoading: true,
      shopCart_each:[],
      allArr:[],

      commenttype: '', // 评价类型
      allcomment: '', // 综合评价
      newAllcomment:[],
      foodscore: '', // 评价分数
      dots: '',
      fen:0,
      fen1:0,
      add1:0,
      each_num:0,
      hhh:0,
    }
  },
  methods: {
    // 购物车加减
    g_jia(i,index){
      this.price=0
      this.hhh=0
      i.num++
      console.log(this.shopCart_each)
      this.$set(i, i.num, this.shop_num)
      this.g_num = i.num
      this.shopCart_each.forEach(add_num=>{
        this.price += add_num.num*Number(add_num.price)
        this.hhh+=add_num.num
      })
    },
    g_jian(i,index){
      this.price=0
      this.hhh=0
      i.num--
      console.log(this.shopCart_each)
      this.$set(i, i.num, this.shop_num)
      this.g_num = i.num
      if(i.num<=0){
        i.num=0
        this.shopCart_each.splice(index,1)
      }else{
        i.num=i.num
      }
      this.shopCart_each.forEach(add_num=>{
        this.price += add_num.num*Number(add_num.price)
        this.hhh+=add_num.num
      })
    },
    // 选规格
    shca (i) {
      this.normtype = false
      this.add1=0
      this.price=0
      this.hhh=0
      this.norm_data.num++
      this.norm_data_food.num++
      this.$set(this.norm_data, this.norm_data.num, this.shop_num)
      this.shop_num = this.norm_data.num
      this.g_num = this.norm_data_food.num

      i.num++
      console.log(this.shopCart_each)
      if (this.shopCart_each.indexOf(i)==-1){
        this.shopCart_each.push(i)
      }
      this.shopCart_each.forEach(add_num=>{
        this.price += add_num.num*Number(add_num.price)
        this.hhh+=add_num.num
      })
    },
    back () {
      this.normtype = false
      this.num2 = 0
    },
    index (i) {
      this.num2 = i
    },
    btn (q,i) {
      console.log(q)
      this.normtype = true
      this.norm_data = q
      this.norm_data_food=i
    },
    jia (item, i) {
      this.add1=0
      this.price=0
      this.hhh=0
      if (item.num > 0) { this.prenx = true }
      item.num++
      i.num++
     if (this.shopCart_each.indexOf(item.specfoods[0])==-1){
       this.shopCart_each.push(item.specfoods[0])
     }
      item.specfoods[0].num++
      console.log(item)
      this.$set(item, item.num, this.shop_num)
      this.g_num = i.num
      this.shop_num = item.num
      this.shopCart_each.forEach((add_num)=>{
        this.price += add_num.num*Number(add_num.price)
        this.hhh+=add_num.num
      })
    },
    jian (item, i) {
      this.add1=0
      this.price=0
      this.hhh=0
      if (item.num <= 0) { this.prenx = false }
      item.num--
      i.num--
      item.specfoods[0].num--
      this.$set(item, item.num, this.shop_num)
      item.num<=0?item.num=0:item.num
      i.num <=0?i.num=0:i.item
      this.g_num = i.num
      this.shop_num = item.num
      // this.price = i.num * item.specfoods[0].price
      this.shopCart_each.forEach(add_num=>{
        this.price += add_num.num*Number(add_num.price)
        this.hhh+=add_num.num
      })
    }
  },
  created () {
    this.id = localStorage.id
    this.addrs = localStorage.geohash
    this.$axios(`https://elm.cangdu.org/shopping/restaurant/${this.id}`)
      .then(res => {
        this.img_path = res.data.image_path
        this.list = res.data
        this.arr = res.data.activities
      })
    this.$axios('https://elm.cangdu.org/shopping/v2/menu?restaurant_id=' + this.id + '').then(res => {
      // console.log(res)
      this.isLoading = false
      this.show_list = res.data
      this.show_list.forEach(item => {
        item.num = 0
        item.foods.forEach(item1 => {
          item1.num = 0
          for (var i in item1) {
            if (i == 'specfoods'){
              item1[i].forEach(item2=>{
                item2.num = 0
              })
            }
            if (i == 'activity') {
              this.obj.push(JSON.parse(JSON.stringify(item1[i])))
            }
            if (i == 'attributes') {
              this.obj1.push(JSON.parse(JSON.stringify(item1[i])))
            }
          }
        })
      })
    })

    // 获取评价分数
    this.$axios('https://elm.cangdu.org/ugc/v2/restaurants/' + localStorage.id + '/ratings/scores').then(res => {
      this.foodscore = res.data
      this.fen= Number(this.foodscore.overall_score.toFixed(1))
      this.fen1=Number(this.foodscore.food_score.toFixed(1))
    })

    // 获取评价分类
    this.$axios('https://elm.cangdu.org/ugc/v2/restaurants/' + localStorage.id + '/ratings/tags').then(res => {
      this.commenttype = res.data
      // console.log(this.commenttype)
    })

    // 获取评价信息
    this.$axios('https://elm.cangdu.org/ugc/v2/restaurants/' + localStorage.id + '/ratings?offset=0&limit=10').then(res => {
      console.log(res)
      this.allcomment = res.data
      // console.log(res.data)
      this.dots = this.allcomment[0].item_ratings

      var types=true
      //延迟加载
      $('#pingbox').scroll((event)=>{
				var top = $('#pingbox').scrollTop()
				var wh = $('#pingbox').height()
        var dh = pingbox.scrollHeight
				if(top+wh+2>=dh){
					if(types){
            types=false
            this.isLoading=true
            fetch('https://elm.cangdu.org/ugc/v2/restaurants/' + localStorage.id + '/ratings?offset=0&limit=10').then(response=>response.json()).then(res=>{
              res.forEach((item)=>{
                this.allcomment.push(item)
              })
              types=true
              this.isLoading=false
            })
					}
				}
			})
    })
  }
}
</script>

<style scoped>
.b_pingjia {
  width: 100%;
  padding-bottom: 0.2rem;
  background-color: #fff;
  padding-top: 0.3rem;
}
.b_pingjia_l {
  width: 40%;
  display: inline-block;
  vertical-align: top;
}
.b_pingjia_l > p {
  text-align: center;
  line-height: 0.4rem;
}
.b_pingjia_l_p1 {
  font-size: 0.4rem;
  color: #ff6201;
}
.b_pingjia_l_p2 {
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.1rem;
}
.b_pingjia_l_p3 {
  font-size: 0.2rem;
  color: #a4a4a4;
}
.b_pingjia_r {
  width: 60%;
  display: inline-block;
  vertical-align: top;
}
.b_pingjia_r p {
  line-height: 0.4rem;
}
.b_pingjia_r p span {
  font-size: 0.24rem;
  color: #666;
}
.fenzhong {
  color: #a4a4a4 !important;
}
.b_all {
  width: 100%;
  background-color: #fff;
  margin-top: 0.2rem;
  padding: 0.2rem 0;
  overflow: hidden;
  padding-left: 0.1rem;
}
.b_all_list {
  float: left;
  margin: 0.05rem;
  border-radius: 0.1rem;
}
.b_all_list span {
  font-size: 0.24rem;
  border-color: #ebf5ff;
  color: #6d7885;
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
  background-color: #ebf5ff;
}
.b_all_list:nth-of-type(3) span{
  background-color: #f5f5f5;
}
.user_list {
  width: 100%;
  margin-top: 0.2rem;
  background-color: #fff;
  padding-bottom: 1rem;
}
.user_list_in {
  width: 96%;
  margin: 0.1rem auto;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.user_list_in_l {
  width: 15%;
  float: left;
}
.user_list_in_r {
  width: 80%;
  float: left;
}
.user_list_in_r p span {
  color: #999;
  font-size: 0.2rem;
}
.dotteds {
  padding: 0 0.1rem;
  width: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #ccc;
  float: left;
  margin-right: 0.1rem;
}
</style>
<style scoped>
.normbox{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
  background: rgba(0,0,0,.3)
}
.norm {
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2rem;
  margin-top: -2rem;
  background: #fff;
  z-index: 99;
}
.norm h3{
  text-align: center;
  position: relative;
}
.norm h3 .n_name{
  font-size: .3rem;
  color: #222;
  font-weight: 400;
  padding: .1rem;
}
.norm h3 .n_back{
  float: right;
  font-size: 0.4rem;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.n_pr,.n_li,.n_ti{
padding:0 0.18rem;
}
.n_li{
  float: left;
  padding: 0 0.12rem;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.4rem;
  margin-right: 0.3rem;
}
.n_li span{
  font-size: 0.24rem
}
.n_ti{
  font-size: 0.24rem;
  color: #222;
}
.n_pr{
  background: #f5f5f5;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0.8rem;
}
.n_pr span:first-of-type{
  color: #ff6201;
  font-weight: 400;
  font-size: 0.24rem;
}
.n_pr span:last-of-type{
  color: #fff;
  padding: 0 0.14rem;
  border-radius: 0.04rem;
  line-height: 0.4rem;
  background: #3b95e9;
  font-size: 0.24rem;
  float: right;
  margin-top: 0.2rem;
}
.pick_bg {
  background: #4cd964;
}
.num_bg {
  background: #3190e8;
}
.shop_cart {
  position: fixed;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  height: 1rem;
  z-index: 999;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.pick_up {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: center;
  color: #fff;
  z-index: 999;
  background: #535356;
  width: 2rem;
}
.shop_none {
  pointer-events: none;
}
.num {
  position: absolute;
  top: 0rem;
  right: 0;
  font-size: 0.2rem;
  background-color: #ff461d;
  text-align: center;
  border-radius: 50%;
  border: 0.025rem solid #ff461d;
  color: #fff;
  line-height: 0.2rem;
  padding: 0.02rem;
}
.l_num {
  line-height: 0.2rem;
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
  background-color: #ff461d;
  text-align: center;
  border-radius: 50%;
  border: 0.025rem solid #ff461d;
  font-size: 0.16rem;
  color: #fff;
  padding: 0.02rem;
}
.btn_jn {
  color: #3190e8;
  border: 1px solid #3190e8;
  line-height: 16px;
}
.list li {
  padding: 0;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.food_container {
  overflow: hidden;
}
.menu_right {
  width: 76%;
  height: 8.73rem;
  box-sizing: border-box;
  overflow: scroll;
}
.menu_left {
  width: 24%;
  height: 8.73rem;
  overflow: scroll;
  box-sizing: border-box;
  float: left;
}
.menu_left::-webkit-scrollbar {
  width: 0 !important;
}
.menu_right::-webkit-scrollbar {
  width: 0 !important;
}
.change_show {
  display: flex;
  background-color: #fff;
  padding: 0.2rem 0.6rem;
  border-bottom: 1px solid #ebebeb;
}
.change_show div {
  flex: 1;
  text-align: center;
}
.change_show div .activity_show {
  color: #3190e8;
  border-color: #3190e8;
}
.change_show div span {
  color: #666;
  font-size: 0.3rem;
  padding: 0.1rem 0;
  border-bottom: 0.05rem solid #fff;
}
.shop_container {
  position: relative;
  height: auto;
}
.shopDetail {
  position: absolute;
  top: 0.7rem;
  right: 0.1rem;
  color: #fff;
  font-size: 0.2rem;
}
.doing h3{
   text-align: center;
}
.doing span{
  font-size: .2rem
}
.doing *{
  color: white;
}
.doing div{
  margin-bottom: .4rem;
  padding: 0 .4rem;
}
.doing{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  z-index: 20;
}
.back_Takeaway {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  padding-left: 0.02rem;
  font-size: 0.3rem;
}
.head span {
  font-size: 0.2rem;
  color: #fff;
  display: inline-block;
}
.name {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.1rem;
  background-color: rgb(240, 115, 115);
  border-color: rgb(240, 115, 115);
  text-align: center;
}
.head {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0.1rem;
  background: rgba(183, 183, 183, 0.8);
  overflow: hidden;
}
.tit_img {
  float: left;
}
.tit_img img {
  width: 1rem;
  height: 1rem;
}
.tit_info {
  margin-left: 1.1rem;
}
.tit_info p {
  line-height: 0.3rem;
  color: #fff;
  font-size: 0.23rem;
}
.tit_info h3 {
  line-height: 0.4rem;
  font-size: 0.25rem;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.bg {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.min {
  height: 1.3rem;
}
.max {
  height: 1.7rem;
}
.bg img {
  width: 100%;
}
.food_price {
  flex: 2;
  text-align: center;
}
.r_btn {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background: #3b95e9;
  font-size: 0.2rem;
  border-radius: 0.1rem;
}
.tit_name {
  position: absolute;
  top: 0.5rem;
  right: 0.1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  z-index: 1;
  background: #39373a;
}
.menu_right .tit_name span,
.menu_right .tit_name i {
  color: #fff;
}
.menu_right .zhpai {
  position: absolute;
  top: 0;
  right: 0.15rem;
  color: rgb(240, 115, 115);
  border: solid 1px rgb(240, 115, 115);
  padding: 0.03rem;
  border-radius: 0.15rem;
  line-height: 0.2rem;
}
.menu_detail_footer {
  display: flex;
}
.menu_detail_footer p span {
  color: #f60;
  font-size: 0.2rem;
}
.bor_active {
  background: #fff;
  border-left: solid 0.03rem #3190e8;
}
.menu_food_description p .border {
  font-size: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0.03rem;
  border: solid 0.02rem rgb(240, 115, 115);
  border-radius: 0.15rem;
  color: rgb(240, 115, 115);
}
.menu_right .tit {
  padding: 0.15rem 0 0.15rem 0.15rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.menu_right .rexiao {
  font-size: 0.3rem;
  font-weight: 700;
}
.menu_right i {
  font-size: 0.2rem;
  color: #999;
}
.asle {
  position: absolute;
  bottom: 0;
  top: 58%;
  left: 45%;
  color: #fff;
}
.left_top {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  background-color: #4cd964;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: flex-end;
  transform: rotate(-45deg) translate(-0.1rem, -0.8rem);
  border: none;
  border-radius: 0;
}
.left_top p {
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
  flex: 1;
  transform: scale(0.8) translate(0, 0.2rem);
}
.menu_food_description p span {
  font-size: 0.2rem;
}
.menu_food_description * {
  line-height: 0.2rem;
}
.menu_food_description p {
  font-size: 0.15rem;
}
.menu_food_description h4 {
  font-size: 0.2rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.03rem 0;
}
.menu_food_img {
  margin-right: 0.4rem;
}
.menu_detail_link {
  display: flex;
}
.menu_detail_list {
  background-color: #fff;
  padding: 0.2rem 0.2rem;
  border-bottom: 0.01rem solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.menu_right span {
  font-size: 0.15rem;
}
.menu_right h3 {
  width: 100%;
  position: relative;
  font-size: 0.3rem;
  display: flex;
  font-weight: 700;
  padding-left: 0.2rem;
  justify-content: space-between;
  align-items: center;
}
.menu_right {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
}
</style>
