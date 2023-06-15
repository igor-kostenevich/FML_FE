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
      <p class="sm:text-xl text-center text-white mb-4 text-lg">{{ $t('Log in') }}</p>
      <base-input
        v-model="form.email"
        :label="$t('Email')"
        placeholder="admin@gmail.com"
        view="normal"
        class="mb-6"
        :error="form.errors?.email"
      ></base-input>
      <base-input
        v-model="form.password"
        :label="$t('Password')"
        type="password"
        view="normal"
        placeholder="******"
        class="mb-10"
        :error="form.errors?.password"
      ></base-input>
      <base-button class="mb-4">{{ $t('Login') }}</base-button>
      <router-link
        to="/reset"
        class="text-white m-auto mb-6"
        >{{ $t('Forgot password?') }}</router-link
      >
    </div>
  </form>
  <div class="flex items-center justify-center w-full">
    <p class="text-white mr-2 text-sm sm:text-base">{{ $t('Don\'t have account?') }}</p>
    <router-link
      to="/registration"
      class="text-secondary text-sm sm:text-base"
      type="submit"
      >{{ $t('Registration') }}</router-link
    >
  </div>
</template>

<script>
import validation from '@/mixins/validator'
export default {
  name: 'Login',
  mixins: [validation],
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      const rules = {
        email: ['isRequired', 'isEmail'],
        password: ['isRequired', 'isPassword'],
      }
      this.validateForm(rules)
    },
  },
}
</script>
