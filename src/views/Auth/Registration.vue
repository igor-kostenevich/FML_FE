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
      <p class="sm:text-xl text-center text-white mb-4 text-lg">{{ $t('Create account') }}</p>
      <base-input
        v-model="form.first_name"
        view="normal"
        :label="$t('Name')"
        :placeholder="$t('Your name')"
        class="mb-6"
        :error="form.errors?.first_name"
      ></base-input>
      <base-input
        v-model="form.email"
        view="normal"
        :label="$t('Email')"
        placeholder="admin@gmail.com"
        class="mb-6"
        :error="form.errors?.email"
      ></base-input>
      <base-input
        v-model="form.password"
        view="normal"
        :label="$t('Password')"
        type="password"
        placeholder="******"
        class="mb-6"
        :error="form.errors?.password"
      ></base-input>
      <base-input
        v-model="form.r_password"
        view="normal"
        :label="$t('Confirm password')"
        type="password"
        placeholder="******"
        class="mb-10"
        :error="form.errors?.r_password"
      ></base-input>
      <base-button
        type="submit"
        class="mb-4"
        >{{ $t('Registration') }}</base-button
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
        first_name: '',
        email: '',
        password: '',
        r_password: '',
      },
    }
  },
  methods: {
    submit() {
      const rules = {
        first_name: ['isRequired'],
        email: ['isRequired', 'isEmail'],
        password: ['isRequired', 'isPassword'],
        r_password: [
          'isRequired',
          'isPassword',
          { method: 'isEqual', params: [this.form.password]}
        ],
      }
      this.validateForm(rules)
    },
  },
}
</script>
