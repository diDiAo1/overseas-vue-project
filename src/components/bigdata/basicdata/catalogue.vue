<template>
  <div>
    <h1>商品目录页面hhhh</h1>
  </div>
</template>

<script>

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
