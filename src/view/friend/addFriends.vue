<template>
  <div class="addFriends">
			<div class="top-login">
				<span><img src="../../assets/images/group.png" alt=""/></span>
			</div>
			<h1>添加好友</h1>
			<div class="login-top">
				<div class="login-ic">
					<i class="icon"></i>
					<input type="text" name="username" v-model.trim="addFriend.username" placeholder="好友名称"/>
					<div class="clear"> </div>
				</div>
			
				<div class="log-bwn">
					<input type="submit"  value="添加" @click="addFriends" >
					<router-link to="goBack">返回列表</router-link>
				</div>
			</div>
</div>	
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default{
  data () {
    return {

    }
  },
  created () {

  },
  computed: {
    ...mapGetters(['addFriend'])
  },
  mounted () {
  },
  methods: {
    ...mapActions(['addFriends'])
  }
}
</script>
<style scoped>
@import '../../assets/css/friends.css';
</style>
