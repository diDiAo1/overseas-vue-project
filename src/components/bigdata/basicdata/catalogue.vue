<template>
  <div class="row">
    	<div class="col-sm-12 content">
    		<div class="box border green">
    			<div class="box-title">
    				<h4><i class="fa fa-columns"></i><span class="hidden-inline-mobile">商品目录</span></h4>
    			</div>
    			<div class="box-body" ng-scrollbars ng-scrollbars-config="scrollbarConfig">

    			</div>
    		</div>
    		<!-- /BOX -->
    	</div>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'catalogue',

  created(){
      this.setCurrentPath();
  },
  methods: {
    setCurrentPath: function () {
       this.$store.state.currentPath = 'bigdata.website'
       this.$store.state.currentSidebar = 'bigdata.catalogue'
    }
  }
}
</script>
