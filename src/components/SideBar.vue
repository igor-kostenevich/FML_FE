<template>
  <aside
    class="h-full bg-black-dark overflow-y-auto smooth-transition"
    :class="closed"
  >
    <div class="text-xl text-white" :class="!isCloseSidebar ? 'mb-11 pt-4 pl-6' : 'mb-10'">
      <div class="flex items-center">
        <p v-if="!isCloseSidebar" class="text-xl text-white font-light mr-2">Family</p>
        <icon :name="'logo'" class="mr-2"></icon>
        <p v-if="!isCloseSidebar" class="text-xl text-white font-light">CRM</p>
      </div>
    </div>
    <div
      v-if="!isCloseSidebar"
      class="text-white opacity-70 pl-6 mb-5"
    >
      {{ $t('Navigation') }}
    </div>
    <router-link
      v-for="link in sidebarLinks"
      :key="link.name"
      class="py-2 pl-5 cursor-pointer hover:bg-black hover:text-gray flex items-center text-gray-dark"
      :class="{ 'flex w-full items-center justify-center': isCloseSidebar }"
      :to="link.url"
    >
      <div class="w-5 h-5 flex-shrink-0 rounded-full bg-secondary mr-7" />
      <div v-if="!isCloseSidebar">{{ link.name }}</div>
    </router-link>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  data() {
    return {
      sidebarLinks: [
        { name: this.$t('Dashboard'), icon: '', url: '/' },
        { name: this.$t('Budget'), icon: '', url: '/budget' },
      ],
    }
  },
  computed: {
    closed() {
      return this.isCloseSidebar ? 'w-20 flex flex-col items-center py-5' : 'flex-shrink-0 flex-grow-0 w-[247px]'
    },
    ...mapGetters(['isCloseSidebar'])
  },
}
</script>
