<template>
  <div class="h-screen font-sans font-normal antialiased">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    },
  },
}
</script>
