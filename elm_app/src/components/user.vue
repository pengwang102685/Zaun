 <template>
    <div class="user">
        <router-view></router-view>
    </div>
</template>

<script>
import users from '../views/user.vue'
 export default {
    name:'user',
    components:{
        users   
    }
}
</script>
