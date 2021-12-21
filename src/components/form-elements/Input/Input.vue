<template>
  <input
    class="w-full"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue']
})
</script>