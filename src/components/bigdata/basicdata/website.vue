<template>
  <div class="row">
  	<div class="col-sm-12 content">
  		<div class="box border green">
  			<div class="box-title">
  				<h4><i class="fa fa-columns"></i><span class="hidden-inline-mobile">网站列表</span></h4>
  			</div>
  			<div class="box-body" ng-scrollbars ng-scrollbars-config="scrollbarConfig">
  				<div class="col-sm-12 depart-btn table-top">
  					<label class="box-label">关键字：<input type="text" class="form-control" v-model="keyword"></label>
  					<!--时间控件 -->
            <button class="btn btn-default btn-sm"  @click="getWebsiteList()"><i class="fa fa-search"></i>搜 索</button>
  					<button class="btn btn-default btn-sm""><i class="fa fa-plus-circle"></i>新 增</button>
  				</div>
  				<table cellpadding="0" cellspacing="0" border="0" class="datatable table table-striped table-bordered table-hover tabel-self person-table">
  					<thead>
  					<tr class="list-center">
  						<th>序号</th>
  						<th>网站名称</th>
  						<th>网址</th>
  						<th>操作</th>
  					</tr>
  					</thead>
  					<tbody>
  					<tr v-for="(item,index) in websiteList" class="list-center">
  					  <td>{{index + 1 }}</td>
  						<td>{{item.Name}}</td>
  						<td>{{item.Location}}</td>
  						<td>
  							<a data-toggle="tooltip" data-placement="top" ui-sref="start.systemStart.personEditManage({id:person.id,method:'view'})" bs-tooltip
                                 class="a-link-blue">
  								查看
  							</a>
  							<a data-toggle="tooltip" data-placement="top" ui-sref="start.systemStart.personEditManage({id:person.id,method:'edit'})" bs-tooltip
                                 class="a-link-blue">
  								编辑
  							</a>
   							<a data-toggle="tooltip"  data-placement="right" ng-click="delPersonManage(person)" bs-tooltip
                                 class="a-link-blue">
  								删除
  							</a>
   						</td>
  					</tr>
  					</tbody>
  				</table>
  			</div>
  		</div>
  		<!-- /BOX -->
  	</div>
  </div>
</template>

<script>

export default {
  name: 'websiteManage',
  data () {
    return {
      keyword: '',
      websiteList: ''
    }
  },
  created(){
      this.setCurrentPath();
      this.getWebsiteList();
  },
  methods: {
    setCurrentPath: function () {
       this.$store.state.currentPath = 'bigdata.website'
       this.$store.state.currentSidebar = 'bigdata.website'
    },
    getWebsiteList: function () {
      this.$http.get('/TonikIntegration/servlet/WebsiteServlet?methodName=QueryList&strEndTime=&strStraTime=&strPageIndex=1&strPageCount=10',
            {params: {strQuery: this.keyword}})
              .then(function (r) {
                if (r == 'false') {
                   return false;
                }
                else if(r =='sessionOut'){
                   return false;
                }
                this.websiteList = r.body.websiteList;
                console.log('this.websiteList');
                console.log(this.websiteList);
              }, function (err) {
                console.warn(err)
                alert("有误！");
       })
    }
  }
}
</script>

<style scoped>

</style>
