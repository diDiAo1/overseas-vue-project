<template>
  <div>
    <h1>商品管理页面hhhh</h1>
  </div>
</template>

<script>

export default {
  name: 'product',

  created(){
      this.setCurrentPath();
  },
  methods: {
    setCurrentPath: function () {
       this.$store.state.currentPath = 'bigdata.website'
       this.$store.state.currentSidebar = 'bigdata.product'
    }
  }
}
</script>
