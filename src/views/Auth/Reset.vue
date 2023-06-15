<template>
  <form
    class="flex flex-col justify-center flex-1 w-full xs:w-8/12"
    @submit.prevent="submit"
  >
    <div class="flex flex-col justify-center items-center sm:items-stretch">
      <div class="flex items-center justify-center mb-12">
        <icon :name="'logo'" class="mr-4"></icon>
        <div>
          <p class="text-xl text-white font-light">Family</p>
          <p class="text-xl text-white font-light">CRM</p>
        </div>
      </div>
      <p class="sm:text-xl text-center text-white mb-4 text-lg">{{ $t('Reset password') }}</p>
      <base-input
        v-model="form.email"
        :label="$t('Email')"
        view="normal"
        placeholder="admin@gmail.com"
        class="mb-7"
        :error="form.errors?.email"
      ></base-input>
      <base-button
        type="submit"
        class="mb-4"
        >{{ $t('Reset password') }}</base-button
      >
    </div>
  </form>
  <div class="flex items-center justify-center">
    <p class="text-white mr-2">{{ $t('Have account?') }}</p>
    <router-link
      to="/login"
      class="text-secondary"
      >{{ $t('Login') }}</router-link
    >
  </div>
</template>

<script>
import validation from '@/mixins/validator'
export default {
  mixins: [validation],
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
  methods: {
    submit() {
      const rules = {
        email: ['isRequired', 'isEmail'],
      }
      this.validateForm(rules)
    },
  },
}
</script>
