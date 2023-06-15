<template>
  <the-header></the-header>
  <main class="content h-full">
    <div class="flex h-full">
      <side-bar></side-bar>
      <div class="flex w-full bg-black-light flex-1 pt-28 px-8 pb-8">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import TheHeader from '../components/TheHeader.vue'

export default {
  name: 'MainLayout',
  components: {
    SideBar,
    TheHeader,
  },
}
</script>
