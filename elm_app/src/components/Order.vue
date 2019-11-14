<template>
    <div>
        <elmHead>
            <template v-slot:left><span @click="$router.back(-1)">&lt;</span></template>
            <template v-slot:center>订单列表</template>
            <template v-slot:right v-if="!isbtnlogin"><router-link to="/login" class="login">登录/注册</router-link></template>
            <template v-slot:right v-else-if="isbtnlogin"><router-link to="/about/user" class="login"><i class="iconfont">&#xe602;</i></router-link></template>
        </elmHead>

        <div style="height:1rem;"></div>
        <div>
            <div class="content" v-for="i in list">
                <router-link to="/about/orderDetail">
                    <div class="img fl">
                        <img :src="'//elm.cangdu.org/img/'+i.restaurant_image_url">
                    </div>
                </router-link>
                
                <div class="item fl">
                    <router-link to="/about/orderDetail">
                        <div class="title">
                        <h3>{{i.restaurant_name}}></h3>
                        <span>{{i.status_bar.title}}</span>
                        <p>{{i.formatted_created_at}}</p>
                    </div>
                    </router-link>
                    <router-link to="/about/orderDetail">
                        <div class="num">
                            <p>{{i.basket.group[0][0].name}}</p>
                            <span>￥{{i.basket.group[0][0].price}}.00</span>
                        </div>
                    </router-link>
                    <div class="again">
                        <router-link to='/shop'><span>再来一单</span></router-link>
                    </div>
                </div>
            </div>
        </div>

        <elmfoot num=2></elmfoot>
    </div>
</template>

<script>
    import elmfoot from './foot'
    import elmHead from './head'
    export default {
        name: "Order",
        components:{
            elmHead,
            elmfoot,
        },
        data(){
            return{
                isbtnlogin:false,
                list:'',
                user_id:'',
                limit:10,
                offset:0
            }
        },
        created(){
            if(localStorage.user){
                this.isbtnlogin = true 
            }else{
                this.isbtnlogin = false
            
            }

            fetch('https://elm.cangdu.org/bos/v2/users/1/orders?limit=10&offset=0').then(response => response.json()).then(res => {
              this.list = res
            })
        },
    }
</script>

<style scoped>

    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .again{
        text-align:right;
    }
    .again span{
        font-size:.25rem;
        border:1px solid blue;
        color:blue;
        padding:.05rem;
        border-radius:.05rem;
        display:inline-block;
        margin-top:.25rem;
    }
    .num{
        line-height:.8rem;
    }
    .num p{
        display:inline-block;
        font-size:.3rem;
    }
    .num span{
        float:right;
         font-size:.3rem;
         color:red;
    }
    .title h3{
        display:inline-block;
        line-height:.05rem;
        font-size:.25rem;
    }
    .title p{
        font-size:.2rem;
        color:#ccc;
    }
    .title span{
        font-size:.25rem;
        float:right;
    }
    .item div{
        border-bottom:1px solid #eee;
        height:.9rem;
    }
    .item{
        width:5rem;
        margin:0;
    }
    .content{
        margin-bottom:.2rem;
        width:6.4rem;
        height:3rem;
        background-color:white;
        box-sizing:border-box;
        padding:.2rem;
    }
    .img{
        width:0.8rem;
        height:0.8rem;
        margin-right:0.2rem;
    }
    .img img{
        width:0.8rem;
        height:0.8rem;
    }
</style>