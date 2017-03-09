<template>
  <div>
    <navbar></navbar>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

import navbar from '../navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>
