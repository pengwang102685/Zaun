<template>
  <div class="kouwei">
    <header>
      <router-link to="/about/confirmOrder">
        <span class="fl">&lt;</span>
      </router-link>
      <span class="order">订单备注</span>
    </header>
    <div class="quickly_beizhu">
      <p>快速备注</p>
      <ul class="clearfix"
          id="list">
        <li v-for="(i, index) in arr[0]"
            :key="index"
            @click="orderbei(index)" :style="{'margin':index==0?'0.2rem 0 0.2rem 0.2rem':'0.2rem 0','background':arrfirst==index?'#3190e8':''}">
          {{i}}
        </li>
        <li @click="toChange($event)">{{arr2}} </li>
        <li @click="toChange($event)">{{arr3}}</li>
        <li @click="toChange($event)">{{arr4}}</li>
        <li @click="toChange($event)">{{arr5}}</li>
        <li v-for="(r,index) in arr[5]" :key="index+'h'" @click="orderbei1(index)" :style="{'margin':index==0?'0.2rem 0 0.2rem 0.2rem':'0.2rem 0','background':arrlast==index?'#3190e8':''}">{{r}}</li>
      </ul>
    </div>
    <div class="other_beizhu">
      <p>快速备注</p>
      <input type="text"  class="input_text" v-model="ordertxt" placeholder="请输入备注内容(可不填)">
      <!-- <textarea placeholder="请输入备注内容(可不填)"
                class="input_text" v-model="kk"></textarea> -->
      <div class="determine"
           @click="sure">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr:'',
      arr1: '',
      arrfirst:-1,
      arr2: '',
      arr3: '',
      arr4:'',
      arr5:'',
      arrlast:-1,
      alllist:[],
      alllist1:[],
      aLi: '',
      ordertxt:''
    }
  },
  created(){
    this.$axios.get('https://elm.cangdu.org/v1/carts/'+localStorage.uid+'/remarks').then(data=>{
        console.log(data.data.remarks);
        this.arr=data.data.remarks
        this.arr2=data.data.remarks[1][0]
        this.arr3=data.data.remarks[2][0]
        this.arr4=data.data.remarks[3][0]
        this.arr5=data.data.remarks[4][0]
        
      })
  },
  methods: {
    toChange (e) {
      if (e.target.style.background === '') {
        e.target.style.background = '#3190e8'
        this.alllist.push(e.target.outerText)
        // console.log(this.alllist)
      } else {
        e.target.style.background = ''
        for(var r=0;r<this.alllist.length;r++){
            if(this.alllist.indexOf(e.target.outerText)>-1){
                this.alllist.splice(this.alllist.indexOf(e.target.outerText), 1)
            }
        }
        // console.log(this.alllist)
      }
    },
    sure(){
      this.alllist1.push(this.ordertxt)
      this.alllist = this.alllist.concat(this.alllist1)
      this.$router.push({name: 'confirmOrder',params:{list:this.alllist}})
    },
    orderbei(idx){
      this.arrfirst=idx
      this.alllist=[this.arr[0][idx]]
    },
    orderbei1(idx){
      this.arrlast=idx
      this.alllist1=[this.arr[5][idx]]
    }
  }
}
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
.kouwei {
  background-color: #f5f5f5;
}
header {
  height: 1rem;
  line-height: 1rem;
  background-color: #3190e8;
  padding-left: 0.2rem;
  font-size: 0.24rem;
}
header span {
  color: #fff;
  font-weight: 500;
}
.kouwei {
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 110;
}
.order {
  margin-left: 35%;
}
.quickly_beizhu {
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.5rem;
}
.quickly_beizhu p {
  padding-left: 0.2rem;
  font-size: 0.3rem;
}
.other_beizhu {
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.5rem;
}
.other_beizhu p {
  padding-left: 0.2rem;
  font-size: 0.3rem;
}
.input_text {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  background-color: #f9f9f9;
  border: 0.025rem solid #eee;
  resize: none;
  min-height: 2rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  color: #666;
  outline: none;
  padding: 0.5rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  margin: 0.2rem 0.7rem 0 0.7rem;
  line-height: 0.8rem;
  border-radius: 0.2rem;
}
.quickly_beizhu #list li {
  float: left;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  padding: 0.1rem 0.2rem;
  margin: 0.2rem;
  border: 0.02rem solid #3190e8;
}

.list li:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 26px 26px 0 0;
  border-color: transparent #f00 transparent transparent;
  display: none;
}

.list li:before {
  content: "";
  width: 8px;
  height: 4px;
  border-left: solid 2px #fff;
  border-bottom: solid 2px #fff;
  position: absolute;
  right: 4px;
  bottom: 6px;
  z-index: 2;
  transform: rotate(-45deg);
  display: none;
}

.list li:hover {
  border-color: red;
}

.list .active {
  border-color: #f00;
}

.list .active:after,
.list .active:before {
  display: block;
}
</style>
