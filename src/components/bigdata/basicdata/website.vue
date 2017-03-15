<template>
  <div>
    <h1>网站管理页面hhhh</h1>
  </div>
</template>

<script>

export default {
  name: 'websiteManage',

  created(){
      this.setCurrentPath();
  },
  methods: {
    setCurrentPath: function () {
       this.$store.state.currentPath = 'bigdata.website'
       this.$store.state.currentSidebar = 'bigdata.website'
    }
  }
}
</script>
