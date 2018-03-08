<template>
  <div class="container w3layouts agileits">

		<div id="chatbox">

			<div id="friendslist">

				<div id="topmenu">
					<span class="friends">CONTACTS</span>
				</div>

                <!-- <scroll class="wrapper" :data="data" :pulldown="pulldown" @pulldown="loadData"> -->
				<div id="friends" class="content"  v-if="friends.code === '1001'">
					<div class="friend w3layouts none-friend">
						<p >
							<strong>A Oh</strong></br>
							<span>{{friends.message}}<router-link to="addFriends">添加好友</router-link></span>
						</p>
						
					</div>
				</div>
				<div id="friends" class="content" v-else>
					<div class="friend w3layouts" v-for="item in friends.friendList" @click="openAlert({uid:item.uid})">
						<img :src="item.thumbs | filterImg">
						<p>
							<strong>{{item.username}}</strong></br>
							<span>{{item.email}}</span>
						</p>
						<div class="status available"></div>
					</div>
					<div id="search">
						<input type="text" id="searchfield" v-model.trim="contacts" @focus="searchFocus" @blur="searchBlur">
					</div>

				</div>

                </scroll>

			</div>

			<div id="chatview" class="p1">

				<div id="profile">
					<div id="close">
						<div class="cy"></div>
						<div class="cx"></div>
					</div>
					<p>Bucky Barnes</p>
					<span>wintersoldier@gmail.com</span>
				</div>
				<div id="chat-messages" v-if="getMessage.code === '1001'">
					<label>{{getMessage.message}}</label>
				</div>
				<div id="chat-messages" v-else>
					<label>Monday 01</label>

					<div class="message w3layouts">
						<img src="../../assets/images/winter-soldier.jpg">
						<div class="bubble">
							Why are you protecting me?
							<span>4 min</span>
						</div>
					</div>

					<div class="message right agileits">
						<img src="../../assets/images/captain-america.jpg">
						<div class="bubble">
							Coz you're my best friend
							<span>3 min</span>
						</div>
					</div>

					<div class="message">
						<img src="../../assets/images/winter-soldier.jpg">
						<div class="bubble">
							I don't remember you
							<span>2 Min</span>
						</div>
					</div>

					<div class="message right w3layouts">
						<img src="../../assets/images/captain-america.jpg">
						<div class="bubble">
							But I remember you
							<span>1 Min</span>
						</div>
					</div>

					<div class="message">
						<img src="../../assets/images/winter-soldier.jpg">
						<div class="bubble">
							Well, okay!
							<span>Now</span>
						</div>
					</div>

				</div>

				<div id="sendmessage">
					<input type="text" v-model="sendmessage" @focus="sendmessageFocus" @blur="sendmessageBlur">
					<button id="send" @click="send(sendmessage)"></button>
				</div>

			</div>

		</div>

	</div>
</template>
<script>
import '../../assets/js/tabs.js'
// import BScroll from 'better-scroll'
import {mapActions, mapGetters} from 'vuex'
export default{
  data () {
    return {
      'contacts': 'Search contacts...',
      'sendmessage': 'Send message...',
      friendsList: [],
      pulldown: true
    }
  },
  created () {
// 展示列表 同步处理
    // this.$store.commit('CHATLIST')
    this.showChatList()
    this.loadData()
  },
  computed: {
    ...mapGetters(['friends', 'getMessage'])
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'openAlert',
      'sendMessage',
      'showChatList'
    ]),
    searchFocus () {
      if (this.contacts.length > 0) this.contacts = ''
    },
    searchBlur () {
      if (this.contacts.length <= 0) this.contacts = 'Search contacts...'
    },
    sendmessageFocus () {
      if (this.sendmessage.length > 0) this.sendmessage = ''
    },
    sendmessageBlur () {
      if (this.sendmessage.length <= 0) this.sendmessage = 'Send message...'
    },
    loadData () {
      this.$nextTick(() => {
        return null
      })
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/chat.css';
</style>

