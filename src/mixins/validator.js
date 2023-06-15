export default {
  methods: {
    isRequired(value, message) {
      return {
        valid: !!value,
        message: message || this.$t('validation.required_field'),
      }
    },
    isEmail(value, message) {
      return {
        valid: /^([a-zA-Z0-9._-])+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/.test(value),
        message: message || this.$t('validation.valid_email'),
      }
    },
    isPassword(value, message) {
      return {
        valid: value.length >= 6,
        message: message || this.$t('validation.valid_password'),
      }
    },
    isMinLength(value, message, minLength = 4) {
      return {
        valid: value.length >= minLength,
        message: message || this.$t('validation.min_length', { val: minLength }),
      }
    },
    isMaxLength(value, message, maxLength = 51) {
      return {
        valid: value.length >= maxLength,
        message: message || this.$t('validation.max_length', { val: maxLength }),
      }
    },
    isNumber(value, message) {
      return {
        valid: !!(typeof value !== 'number'),
        message: message || this.$t('validation.only_numbers'),
      }
    },
    isEqual(value, message, equalTo) {
      return {
        valid: value === equalTo,
        message: message || this.$t('validation.password_mismatch')
      }
    },


    /**
     * Clear error(s) handler
     * 
     * @param { string } field
     */
    clearErrors(field) {
      if (this.form.errors && field) {
        delete this.form.errors[field]
      } else {
        this.form.errors = {}
      }
    },
    

    /**
     * Validation handler
     * 
     * @param { Array } rules - validation rules
     * @param { Object } form - form for validation
     */
    validateForm(rules, form) {
      let currentForm = form ?? this.form
      currentForm.errors = {}

      Object.keys(currentForm).forEach(key => {
        if (key === 'errors' || key === 'isValid') return

        const value = currentForm[key]
        const validators = rules[key]

        validators.forEach(validator => {
          let result

          if(typeof validator === 'string') {
            result = this[validator](value)
          } else {
            const { method, message, params = [] } = validator
            result = this[method](value, message, ...params)
          }

          if (!result.valid && !currentForm.errors[key]) {
            currentForm.errors[key] = result.message
          }
        })
      })

      currentForm.isValid = !Object.keys(currentForm.errors).length
    },
  },
}
