<template>
  <header
    class="h-20 fixed bg-black px-5 flex justify-between items-center right-0 smooth-transition"
    :class="isCloseSidebar ? 'left-20' : 'left-[247px]'"
  >
    <div
      class="w-fit h-fit text-white text-xl cursor-pointer"
      @click="toggleSidebar"
    >
      <icon :name="'size-icon'"></icon>
    </div>
    <Menu
      as="div"
      class="inline-block text-left"
    >
      <MenuButton>
        <div class="inline-flex w-fit h-fit text-xl cursor-pointer"><icon :name="'menu-icon'"></icon></div>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform translate-y-[45px] scale-95 opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition duration-100 ease-out"
        leave-from-class="transform translate-y-[5px] opacity-100"
        leave-to-class="transform opacity-0"
      >
        <MenuItems class="header-menu-items">
          <MenuItem class="header-menu-link smooth-transition">
            <div>{{ $t('Settings') }} </div>
          </MenuItem>
          <MenuItem class="header-menu-link smooth-transition">
            <div>{{ $t('Logout') }}</div>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { mapGetters, mapMutations } from 'vuex'
import { TOGGLE_SIDEBAR } from '@/store/mutation-types.js'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  computed: {
    ...mapGetters(['isCloseSidebar'])
  },
  methods: {
    toggleSidebar() {
      this.TOGGLE_SIDEBAR()
    },
    ...mapMutations([ TOGGLE_SIDEBAR ]),
  },
}
</script>
