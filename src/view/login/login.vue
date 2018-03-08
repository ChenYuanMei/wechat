<template>
  <!-- main -->
	<div class="main">
		<h1>WECHAT</h1>
		<div class="main-w3lsrow">
			<!-- login form -->
			<div class="login-form login-form-left"> 
				<div class="agile-row">
					<h2>登录</h2> 
					<div class="login-agileits-top"> 	
							<p>User Name</p>
							<input type="text" class="name" name="username" v-model.trim="loginInfo.username" required="用户名必填" />
							<p>Password</p>
							<input type="password" class="password" name="password" v-model.trim="loginInfo.password" required="密码必填"/>  
							<label class="anim">
								<input type="checkbox" class="checkbox">
								<span>记住我?</span> 
							</label>   
							<input type="submit" value="登录" @click="login"> 
					</div> 
					<div class="login-agileits-bottom"> 
						<h6><a href="#" class="fogotPassword">忘记密码?</a> <router-link :to="{path:'register'}" class="register"> 注册 </router-link></h6>
					</div> 
				</div>  
			</div>  
	</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['loginInfo'])
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
 h1 {
    padding-top: 1em;
    font-size: 2.8em;
    text-align: center;
    color: #fff;
    font-weight: 800;
    margin-bottom: 1em;
	  letter-spacing: 1px;
}
.login-form h2{
    font-size: 2.2em;
    color: #fff;
    text-align: center;
    margin-bottom: 1.5em;
    line-height: 0.7em;
   
    font-weight: 100;
    letter-spacing: 2px;
}
/*-- main --*/
.main {
  width: 100%;
  height: 100%;
  border: 0px;
  background-size: 100% 100%;
  background: url('../../assets/images/login_bg.jpg') repeat 0 0;
}
.main-w3lsrow {
  margin: 0 auto;
	background:rgba(0, 0, 10, 0.66);
	width:25%;
	padding:2em;
}
.login-form input[type="text"], .login-form input[type="password"] {
    outline: none;
    font-size: 1em;
    color: #fff;
    padding: .6em 1em;
    margin: 0;
    width: 91%;
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    -webkit-appearance: none;
    display: block;
    background: transparent;
}
.login-form p {
    font-size: 0.9em;
    color: #fff;
    margin: 1.5em 0 .8em;
    font-weight: 200;
    letter-spacing: 6px;
    text-align: left;
}
/*-- checkbox --*/
.anim {
    font-size: 0.9em;
    color: #fff;
    cursor: pointer;
    position: relative;
    margin: 2em 0 0;
    font-weight: 100;
    display: inline-block;
    letter-spacing: 3px;
}
input.checkbox {
    background: #fff;
    cursor: pointer;
    vertical-align: top;
    margin: 1px 8px 0 0; 
}
input.checkbox:before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: inherit;
}
input.checkbox:after {
    content: "";
    position: absolute;
	top: 1px;
    left: 0;
    z-index: 1;
    width: 14px;
    height: 14px;
    background: #fff;
    border: 2px solid #fff;
    -webkit-transition: .4s all;
    -moz-transition: .4s all;
    -o-transition: .4s all;
    -ms-transition: .4s all;
    transition: .4s all;
}
input.checkbox:checked:after {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border-color: #8a2ce2;
    border-top-color: transparent;
    border-right-color: transparent;
    background: transparent;
    top: 4px;
    left: 3px;
    width: 9px;
    height: 3px;
} 
@keyframes rippling {
	50% {
		border-left-color: #8a2ce2;
	}
	100% {
		border-bottom-color: #8a2ce2;
		border-left-color: #8a2ce2;
	}
}  
/*-- //checkbox --*/
.login-form input[type="submit"] {
    font-size: 1em;
    color: #ffffff;
    background: #9b41b3;
    border: 1px solid #9b41b3;
    outline: none;
    cursor: pointer;
    padding: .6em 1em;
    -webkit-appearance: none;
    width: 100%;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
    margin-top: 2em;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.login-form input[type="submit"]:hover {
    background: transparent;
    color: #fff;   
} 
.login-agileits-bottom {
    margin-top:1.6em;
    text-align: center; 
}
.login-agileits-bottom h6 {
    font-size: 1em;
    font-weight: 200;
    letter-spacing: 5px;
}
.login-agileits-bottom h6 a {
    text-decoration: none;
    color: #fff;
    transition: 0.5s all ;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.login-agileits-bottom h6 a.register{
  margin-left: 1em;
}
.login-agileits-bottom h6 a:hover{
    color: #d2a2ff; 
}
/*-- //main --*/ 
/*-- copyright --*/
.copyright {
    padding: 2.4em 0 2em;
    text-align: center;
}
.copyright p {
    font-size: 1em;
    color: #fff;
	line-height:1.8em;
	letter-spacing: 1px;
}
.copyright p a{
    color: #fff; 
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
	transition: 0.5s all;
}
.copyright p a:hover{
    color: #d2a2ff;	
}
/*-- //copyright --*/
/*-- responsive-design --*/ 
@media(min-width:1280px){
.main-w3lsrow {
    width: 30%;
}
}
@media(max-width:1080px){
.main-w3lsrow {
    width: 37%;
}
}
@media(max-width:991px){
}
@media(max-width:800px){
.login-form input[type="text"], .login-form input[type="password"] { 
    width: 90%; 
}
.login-agileits-bottom h6 { 
    letter-spacing: 3px;
}
.login-form h2{
    font-size: 2em; 
	margin-bottom: 1.2em;
}
.main-w3lsrow {
    width: 44%;
}
}
@media(max-width:768px){
}
@media(max-width:736px){	
.main-w3lsrow {
    width: 50%;
}
}
@media(max-width:667px){	
.main-w3lsrow {
    width: 56%;
}
}
@media(max-width:640px){
h1 {
    font-size: 2.4em;
}
.login-form input[type="submit"] { 
    margin-top: 1.5em; 
} 
} 
@media(max-width:568px){
.login-form input[type="text"],.login-form input[type="password"],.login-form input[type="submit"] { 
    font-size: 0.9em; 
    padding: .5em 0.8em; 
}
.login-form p {
    font-size: 0.8em; 
    margin:1.2em 0 .8em; 
    letter-spacing: 4px;
}
h1 {
    font-size: 2.2em;
}
.login-form h2 {
    font-size: 1.8em;
    margin-bottom: 1em;
}
.copyright p {
    font-size: 0.9em; 
    padding: 0 1em;
} 
.login-agileits-bottom h6 {
    font-size: 0.9em; 
    letter-spacing: 3px;
}
}
@media(max-width:480px){
h1 {
    font-size: 1.9em;
}  
.main-w3lsrow {
    width: 63%;
}
}
@media(max-width:414px){ 
h1 {
    font-size: 1.8em;
} 
.login-form h2 {
    font-size: 1.4em;
    margin-bottom: 2em;
}
.login-form p {
    font-size: 0.75em;
    margin: 2em 0 .2em;
    letter-spacing: 2px;
}
.anim {
    font-size: 0.75em; 
}
.login-agileits-bottom {
    margin-top: 1em; 
}
.login-form input[type="text"], .login-form input[type="password"] {
    width: 89%;
}
} 
@media(max-width:384px){   
}
@media(max-width:320px){  
h1 {
    font-size: 1.6em; 
} 
.login-form input[type="text"], .login-form input[type="password"], .login-form input[type="submit"] {
    font-size: 0.8em;
    padding: .5em 0.8em;
}
.login-form p {
    font-size: 0.7em; 
}
.anim {
    font-size: 0.7em;
	margin: 1em 0 0;
    letter-spacing: 1px;
}
input.checkbox:before { 
    width: 15px;
    height: 14px; 
}
input.checkbox:after { 
    width: 11px;
    height: 8px; 
}
input.checkbox:checked:after { 
    top: 3px;
    left: 2px;
    width: 7px;
    height: 2px;
} 
.login-agileits-bottom h6 {
    font-size: 0.75em;
    letter-spacing: 2px;
}
.login-agileits-bottom {
    margin-top: 0.8em;
}
.login-form h2 {
    font-size: 1.2em; 
}
.copyright p {
    font-size: 0.8em; 
}
.copyright {
    padding: 1.4em 0 1em;
}
}
</style>
