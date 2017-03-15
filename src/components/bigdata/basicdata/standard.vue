<template>
  <div>
    <h1>标准产品页面hhhh</h1>
  </div>
</template>

<script>

export default {
  name: 'standard',

  created(){
      this.setCurrentPath();
  },
  methods: {
    setCurrentPath: function () {
       this.$store.state.currentPath = 'bigdata.website'
       this.$store.state.currentSidebar = 'bigdata.standard'
    }
  }
}
</script>
