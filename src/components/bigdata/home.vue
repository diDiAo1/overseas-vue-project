<template>
  <div>
    <navbar></navbar>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import navbar from '../navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>
