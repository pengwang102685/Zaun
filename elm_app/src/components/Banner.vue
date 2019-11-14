<template>
    <div class="swiper-container in-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="item" v-for="j in list.slice(0,8)" :key="j.id" @click="hh(j)">
                    <router-link :to="{name:'sweetmeats'}">
                        <img :src="'https://fuss10.elemecdn.com'+j.image_url" alt="">
                        <p>{{j.title}}</p>
                    </router-link>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="item" v-for="j in list.slice(8)" :key="j.id" @click="hh(j)">
                    <router-link :to="{name:'sweetmeats'}">
                        <img :src="'https://fuss10.elemecdn.com'+j.image_url" alt="">
                        <p>{{j.title}}</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <!-- <div>1</div> -->
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return {
            list:[]
        }
    },
    created() {
         fetch('http://elm.cangdu.org/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F')
            .then( response => response.json())
            .then( res => {
                console.log(res)
                this.list=res
            })  
    },
    updated() {
        // console.log(100)
        new Swiper('.in-banner',{
            loop:true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    },
    methods:{
        hh(a){
            this.$store.commit('setselectshop',a.title)
        }
    }
}
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }
    .swiper-container {
        padding-top: 1rem !important;
        width: 100% !important;
        height: 4.6rem;
    }
    .swiper-slide {
        width: 6.4rem !important;
        height: 100%;
        /* text-align: center; */
        font-size: 0.18rem;
        background: #fff; 
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%
    }
    .swiper-slide .item{
        width: 25%;
        text-align: center;
        padding: 0.03rem 0;
    }
    .swiper-slide img{
        margin-bottom: 0.05rem;
        width: 0.8rem;
        height: 0.8rem;
    }
    .swiper-slide p{
        font-size: 0.23rem;
        color: #666;
        text-align: center;
        display: block;
    }
</style>