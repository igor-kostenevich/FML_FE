<template>
  <button
    :class="classes"
    class="flex items-center self-center px-8 py-2 text-white rounded transition-colors duration-300"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'bg-primary hover:bg-primary-hover',
    },
  },
}
</script>
