<template>
  <div class="hello">
    <div class="logo_box">
  			<h1 style="margin-top:-20px;margin-left:50px;">
  			  <!--<img src="../../static/img/logo11.png"/>-->
  			  大数据风险分析平台
  			</h1>
  	</div>
		<div class="banner_bg">
			<div class="banner">
        <form class="login_form" name="loginForm" method="post" novalidate>
  					<div class="form_title">
  						<span class="title_word"><img src="img/pen_icon.png" class="loginImg" />请登录</span>
  					</div>
  					<div class="submit_box">
  						<div id="userCodeDiv">
  							<input class="txt1" type="text" v-model="userName" placeholder="用户名" required/>
  							<div>
  								<small class='error' ng-bind="error.name"></small>
  							</div>
  						</div>
  						<div id="userPassword">
  							<input class="txt2" type="password" v-model="password" placeholder="密码" required ng-Enter="login()"/><br/>
  							<div>
  								<small class='error'></small>
  							</div>
  						</div>
  						<input class="submit_btn" type="button" value="登录" @click="login()"/>
  					</div>
  				</form>
  			</div>
  		</div>
    		<div class="login_footer">
    		  Copyright ©2016 All rights reserved
    			上海思创华信信息技术有限公司版权所有
    		</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'bigData',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      password: ''
    }
  },
  methods: {
    toPath: function () {
      this.$router.push({name: 'home'})
    },
    login: function () {
      this.$http.get('/TonikIntegration/servlet/LoginServlet?methodName=login&system=1',
      {params: {userPwd: this.password, userCode: this.userName}})
        .then(function (res) {
          console.log(res)
          if (res.body.menuList.length != 0) {
           this.$router.push({name: 'bigdata.homePage'})
          }
        }, function (err) {
          console.warn(err)
          alert("用户名或密码有误！");
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/login.css'
</style>
