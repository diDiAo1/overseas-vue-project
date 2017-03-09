<template>
  <div class="navbar navbar-default1">
     			<!--<div class="navbar-brand">
     					<div class="visible-xs">
     						<a href="" class="team-status-toggle switcher btn dropdown-toggle">
     							<i class="fa fa-users"></i>
     						</a>
     					</div>
     				</div>
     				 NAVBAR LEFT -->
     				<ul class="nav navbar-nav pull-left hidden-xs">
     					<li class="dropdown title-sub" id="navbar-left" style="margin-right: -45px">
     						<a class="team-status-toggle dropdown-toggle tip-bottom">
     							<span class="name" style="font-size: 16px">大数据平台</span>
     						</a>
     					</li>

     					<li class="topMenu-left" v-for="item in topMenus.menuList">
                              <a class="dropdown-toggle navbar-nav-a setW" @click="toPath(item.NodeId,item.Id)"
                              ><span class="name">{{item.Name}}</span></a>
                            </li>
     				 </ul>

     				<ul class="nav navbar-nav pull-right">
     					<li class="dropdown pull-right" id="header-user">
     						<a href="" class="dropdown-toggle" data-toggle="dropdown">
     							<span class="username">退出：{{userCode}}</span>
     							<i class="fa fa-angle-down"></i>
     						</a>
     						<!--<ul class="dropdown-menu">
     							<li><a ng-click="vm.editPassword()"><i class="fa fa-user"></i><span>修改密码</span></a></li>
                                 <li ng-click="vm.loginOut()"><a href=""><i class="fa fa-power-off"></i><span>注销登录</span></a></li>
     						</ul>-->
     					</li>
     				</ul>
</div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
      return {
        topId: this.$route.params.topId,
        userCode: 'admin',
        topMenus: ''
      }
    },
    created(){
      this.getTopMenu()
    },
    methods: {
      getTopMenu: function () {
        /*this.$http.post('/Jails/servlet/SystemFunctionServlet',
           {
              methodName  :   17,
              id:             this.$route.params.topId
           })
           .then(function (res) {
             console.log(res)
             if (res.body.success) {
              this.topMenus = res.body.data
             }
           }, function (err) {
             console.warn(err)
           })*/
           this.topMenus = {"menuList":[{"Id":"1","Name":"首页","NodeId":"bigdata.homePage","Level":"1","Sort":"1","ParentId":"0","PicUrl":""},
                       {"Id":"2","Name":"基础数据","NodeId":"bigdata.websiteManage","Level":"1","Sort":"2","ParentId":"0","PicUrl":""},
                       {"Id":"3","Name":"风险","NodeId":"","Level":"1","Sort":"3","ParentId":"0","PicUrl":""},
                       {"Id":"4","Name":"信息管理","NodeId":"","Level":"1","Sort":"4","ParentId":"0","PicUrl":""},
                       {"Id":"5","Name":"报表","NodeId":"","Level":"1","Sort":"5","ParentId":"0","PicUrl":""},
                       {"Id":"6","Name":"配置","NodeId":"","Level":"1","Sort":"6","ParentId":"0","PicUrl":""}]}
                       console.log(this.topMenus.menuList);
      },
      toPath: function (note,id) {
        this.$router.push({name: note, params:{menuId: id}})
      }
    }
}

</script>

<style>
  @import '../../static/css/navbar.css'
</style>
