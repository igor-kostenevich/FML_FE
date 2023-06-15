<template>
  <div class="flex items-center justify-center xs:bg-black-light sm:min-h-screen h-fit sm:py-0 sm:px-20">
    <div class="container auth-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
