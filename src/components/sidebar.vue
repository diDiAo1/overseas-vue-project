<template>
	<div id="sidebar" class="sidebar">
		<div class="sidebar-menu nav-collapse">
			<ul class="title-nav-top">
				<li>
					<span class="hide-span">菜单</span>
				</li>
				<!--<div id="sidebar-collapse" class="sidebar-collapse btn">
					<i class="fa fa-bars" data-icon1="fa fa-bars" data-icon2="fa fa-bars" ></i>
				</div>-->
			</ul>

			<!-- SIDEBAR MENU -->
			<ul id="sidebarMenu" class="main-menu nav nav-pills nav-stacked">
				<li v-for="menu in sideBarMenus.menuList" class="has-sub">
					<a>
						<!--<i ng-class="menu.menuClass"></i> -->
						<span class="menu-text">{{menu.Name}}</span>
						<!--<span ng-if="menu.leaf" ng-class="vm.bg[menu.id]" class="arrow"></span>-->
					</a>
					<!--<ul class="main-menu sub-main sub nav nav-pills nav-stacked" ng-if="menu.leaf" ng-class="vm.bg[menu.id]">
						<li ng-repeat="subMenu in menu.subMenu" ng-click="vm.subActive(subMenu.id,subMenu.note,$event)" ng-class="vm.subBg[subMenu.id]">
							<a>
								<img ng-src="{{vm.imgSrc + subMenu.id}}" class="menu-img">
								<span class="sub-menu-text">{{subMenu.name}}</span>
							</a>
						</li>
					</ul>-->
				</li>
			</ul>
			<!-- /SIDEBAR MENU -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      sideBarMenus: '',
    }
  },
  created () {
    this.getSideBarMenu()
  },
  methods: {
    getSideBarMenu: function () {
      this.sideBarMenus = {"menuList":[{"Id":"1","Name":"网站管理","NodeId":"","Level":"1","Sort":"1","ParentId":"0","PicUrl":""},
              {"Id":"2","Name":"商品目录","NodeId":"","Level":"1","Sort":"2","ParentId":"0","PicUrl":""},
              {"Id":"3","Name":"标准产品","NodeId":"","Level":"1","Sort":"3","ParentId":"0","PicUrl":""},
              {"Id":"4","Name":"商品管理","NodeId":"","Level":"1","Sort":"4","ParentId":"0","PicUrl":""}]}
                                                 console.log(this.sideBarMenus.menuList);


      /*this.$http.post('/Jails/servlet/SystemFunctionServlet',
         {
            methodName  :   18,
            id:             this.$route.params.menuId
         })
         .then(function (res) {
           console.log(res)
           if (res.body.success) {
            this.sideBarMenus = res.body.data
           }
         }, function (err) {
           console.warn(err)
         })*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sidebar {
      border: 1px solid #337ab7;
      box-shadow: 0 0 3px #337ab7;
      padding: 0 !important;
      width: 220px;
      position: absolute;
      margin-top: 8px;
      margin-left: 10px;
      border-radius: 4px;
  }
  #sidebar * {
      text-overflow: ellipsis;
  }
  ul.title-nav-top {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 30px;
  }
  .sidebar-menu > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  .btn {
      box-shadow: 0 1px 3px 1px rgba(0,0,0,.1);
  }
  .sidebar-collapse, .switcher {
      padding: 10px 10px 0 0;
      position: absolute;
      top: 8px;
      right: 4px;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);
      color: #FFFFFF;
      padding: 6px 8px;
  }

  #sidebar * {
      text-overflow: ellipsis;
  }
  .sidebar-collapse > [class*="fa-"], .switcher > [class*="fa-"] {
      color: #337ab7;
  }
  .sidebar-collapse > [class*="fa-"], .switcher > [class*="fa-"] {
      /* color: #9db36a; */
      cursor: pointer;
      display: inline-block;
      padding: 0 5px;
      position: relative;
      float: right;
  }
  .sidebar-menu > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  ul.main-menu li.open {
      margin-left: 4px;
      margin-right: 4px;
  }
  .sidebar-menu > ul > li.has-sub {
      position: relative;
  }
  .sidebar-menu > ul > li {
      display: block;
      margin: 0;
      padding: 0;
      border: 0px;
  }
  .main-menu > li {
      margin-top: 0 !important;
  }
  .sidebar-menu > ul > li.has-sub.open > a, .sidebar-menu > ul > li > a:hover, .sidebar-menu > ul > li:hover > a {
      color: #ffffff;
      background-color: #73B8F3;
  }
  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {
      background-color: #eeeeee;
      border-color: #5e87b0;
  }
  .sidebar-menu > ul > li > a {
      /* border-bottom: 1px solid #ffffff !important; */
      border: 1px solid #e7e7e7 !important;
      color: #555555 !important;
  }
  .sidebar-menu > ul > li > a {
      display: block;
      position: relative;
      margin: 0;
      border: 0 none;
      padding: 10px 15px 10px 20px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
  }
  .nav-pills > li > a {
      border-radius: 4px;
  }
  .main-menu > li > a {
      text-align: left;
  }
  .sidebar-menu > ul > li.open > a > span {
      color: #ffffff;
  }

  ul.main-menu li:not(.nav-header) a{
      -webkit-transition: .3s;
      -moz-transition: .3s;
      -ms-transition: .3s;
      -o-transition: .3s;
      transition: .3s;
  }
  ul.main-menu li.open {
      margin-left: 4px;
      margin-right: 4px;
  }
  ul.main-menu li a:hover {
      margin-left: 4px;
      margin-right: 4px;
  }
  .sidebar-menu > ul > li.has-sub {
      position: relative;
  }
  .sidebar-menu > ul > li {
      display: block;
      margin: 0;
      padding: 0;
      border: 0px;
  }
  .sidebar-collapse:hover, .switcher:hover {
      background-color: #337ab7;
  }
  ul.title-nav-top span {
      color: #254b7d;
  }
  ul.title-nav-top span {
      font-size: 14px;
      font-weight: 600;
  }
</style>
