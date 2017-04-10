<template>
  <div>
      <sidebar></sidebar>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import sidebar from '../../sidebar'

export default {
  name: 'basicdata',
  components: {
    sidebar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
