<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      :class="{ 'text-red-dark': error }"
      :for="uniqueId"
      class="mb-1 text-white"
    >
      {{ label }}
    </label>
    <input
      v-model="model"
      :id="uniqueId"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      class="h-9 px-3 py-2"
      :class="classes"
      @blur="onBlur"
      @focus="onFocus"
    />
    <p
      v-if="error"
      class="text-sm text-red-dark mt-2"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    view: {
      type: String,
      default: 'easy',
    },
    id: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  computed: {
    uniqueId() {
      return this.id || uuidv4()
    },
    classes() {
      return {
        'bg-gray-light rounded shadow-inset-md border-2 border-gray-light focus:border-2 focus:border-secondary': this.view === 'normal',
        'placeholder-gray-dark bg-transparent border-b-2 border-white text-white': this.view === 'easy',
        'border-red-dark text-red-dark border-b-red-dark': this.error,
        ...this.inputClass,
      }
    },
    model: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    onBlur(event) {
      // blur event
    },
    onFocus(event) {
      this.$emit('focus', event)
    },
  },
}
</script>
